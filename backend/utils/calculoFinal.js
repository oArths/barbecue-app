// simula os dados armazenados no banco de dados
import genero_produtos from "../repositories/genero_produto.repositories";
import produtos from "../repositories/produto.repositories";

let precoTotal;

async function calculoFinal(
    homens,
    mulheres,
    criancas,
    naobebem,
    carnesSelecionadas,
    bebidasSelecionadas,
    extrasSelecionados
) {
    const totalPessoas = homens + mulheres + criancas;
    const adultos = homens + mulheres;

    // validações (regras de negocios)
    if (totalPessoas < 1) console.info("informe ao menos uma pessoa")

    else if (totalPessoas > 50) console.info("A quantidade total de pessoas deve ser menor que 50");

    else if (adultos == 0) console.info("informe um adulto")

    else {
        // reinicia a contagem do valor final
        precoTotal = 0;

        const carnes = await calcularConsumo(carnesSelecionadas, homens, mulheres, criancas)
        const bebidas = await calcularConsumo(bebidasSelecionadas, homens, mulheres, criancas + naobebem)
        const extras = await calcularConsumo(extrasSelecionados, homens, mulheres, criancas)

        return {
            // calculo individual dos produtos
            carnes,
            bebidas,
            extras,

            total: precoTotal,
            porPessoa: precoTotal / adultos,
            adultos

        }
    }

}

// calcula quanto prcecisa por tipo  
async function calcularConsumo(itens, homens, mulheres, criancas) {
    return itens.map(async (item) => {

        // consulta a tabela de produto para obter mais informações 
        const produto = await produtos.buscarPorNome(item);

        // calcula a quantidade de gramas para cada genero
        let qtdTotal = 0;
        qtdTotal += await calcularQtdsPorGenero(produto.pk_idproduto, "homem", homens);
        qtdTotal += await calcularQtdsPorGenero(produto.pk_idproduto, "mulher", mulheres);

        // caso não seja para maiores de 18, criancas podem consumir
        if (!produto.maiorIdade) {
            qtdTotal += await calcularQtdsPorGenero(produto.pk_idproduto, "crianca", criancas);
        }

        // transforma as gramas em kilo ou milimetros em litros
        qtdTotal /= 1000;

        const preco = produto.preco * qtdTotal;

        precoTotal += preco;

        return { nome: item, qtdTotal, preco, uniMedida: produto.categoria == 'bebida' ? "L" : produto.categoria == "extra" ? "Uni" : "Kg" }
    })
}


// calcula o consumo de gramas baseado na quantidade de pessoas e tipo da carne 
const calcularQtdsPorGenero = async (id, genero, qtdPessoas) => {
    const produto = await genero_produtos.buscarPorIdEGenero(genero, id)

    // caso não encontrar um registro que relaciona a quantidade
    return produto ? produto.qtdMaxima * qtdPessoas : 0
}

export { calculoFinal, calcularConsumo }