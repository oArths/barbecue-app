// simula os dados armazenados no banco de dados
import genero_produtos from "../repositories/genero_produto.repositories";
import produtos from "../repositories/produto.repositories";

export class calculoFinal {
  constructor() {
    this.homens = 0;
    this.mulheres = 0;
    this.criancas = 0;
    this.naobebem = 0;
    this.carnesSelecionadas = [];
    this.bebidasSelecionadas = [];
    this.extrasSelecionados = [];
    this.precoTotal;
  }

  // calcula o consumo de gramas baseado na quantidade de pessoas e tipo da carne
  async #calcularQtdsPorGenero(id, genero, qtdPessoas) {
    const produto = await genero_produtos.buscarPorIdEGenero(genero, id);
    console.log(produto);
    // caso não encontrar um registro que relaciona a quantidade
    return produto ? produto.qtdMaxima * qtdPessoas : 0;
  }

  // calcula quanto prcecisa por tipo
  async #calcularConsumo(itens, homens, mulheres, criancas) {
    return itens.map(async (item) => {
      // consulta a tabela de produto para obter mais informações
      const produto = await produtos.buscarPorNome(item);

      // calcula a quantidade de gramas para cada genero
      let qtdTotal = 0;
      qtdTotal += await calcularQtdsPorGenero(
        produto.pk_idproduto,
        "homem",
        homens
      );
      console.log(qtdTotal);
      qtdTotal += await calcularQtdsPorGenero(
        produto.pk_idproduto,
        "mulher",
        mulheres
      );

      // caso não seja para maiores de 18, criancas podem consumir
      if (!produto.maiorIdade) {
        qtdTotal += await calcularQtdsPorGenero(
          produto.pk_idproduto,
          "crianca",
          criancas
        );
      }

      // transforma as gramas em kilo ou milimetros em litros
      qtdTotal /= 1000;

      const preco = produto.preco * qtdTotal;

      precoTotal += preco;

      return {
        nome: item,
        qtdTotal,
        preco,
        uniMedida:
          produto.categoria == "bebida"
            ? "L"
            : produto.categoria == "extra"
            ? "Uni"
            : "Kg",
      };
    });
  }

  validarPessoas() {
    const response = "";
    const totalPessoas = homens + mulheres + criancas;
    const adultos = homens + mulheres;

    const tests = [
        [totalPessoas < 1, "informe ao menos uma pessoa"]
        [totalPessoas > 50, "A quantidade total de pessoas deve ser menor que 50"]
        [adultos < 1, "informe um adulto"]

    ]
    
    tests.some()

  }

  async calculoFinal() {
    // reinicia a contagem do valor final
    precoTotal = 0;

    const carnes = await calcularConsumo(
      carnesSelecionadas,
      homens,
      mulheres,
      criancas
    );
    const bebidas = await calcularConsumo(
      bebidasSelecionadas,
      homens,
      mulheres,
      criancas + naobebem
    );
    const extras = await calcularConsumo(
      extrasSelecionados,
      homens,
      mulheres,
      criancas
    );

    return {
      // calculo individual dos produtos
      carnes,
      bebidas,
      extras,

      total: precoTotal,
      porPessoa: precoTotal / adultos,
      adultos,
    };
  }
}
