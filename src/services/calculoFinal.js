import { userProduto } from "../database/userGeneroProduto";

export function calculoFinal() {
  const product = userProduto();

  async function calculoConsumoPorProduto(
    nome,
    pessoas = { homem, mulher, crianca }
  ) {
    nome = String(nome).toLowerCase();
    const produto = await product.buscarPorNome(nome);

    // pega todas as informações de pessoas relaciondas ao produto
    const qtdPorGenero = await product.buscarPorProduto(produto.pk_idproduto);

    let qtdDoProduto = 0;
    
    qtdDoProduto += qtdPorGenero.maxHomem * pessoas.homem;
    qtdDoProduto += qtdPorGenero.maxMulher * pessoas.mulher;
    qtdDoProduto += qtdPorGenero.maxCrianca * pessoas.crianca;
    
    qtdDoProduto /= 1000;

      
    let preco = produto.preco * qtdDoProduto;

    const response = {
      nome: nome,
      qtdDoProduto,
      preco: Number(preco.toFixed(2)),
      uniMedida:
        produto.categoria == "bebida"
          ? "L"
          : produto.categoria == "extra"
          ? "Uni"
          : "Kg",
    };

    console.log(response)
    return response;
  }

  async function calcular({
    carnesSelecionadas,
    bebidasSelecionadas,
    extrasSelecionados,
    homem,
    mulher,
    crianca,
  }) {
    // reinicia a contagem do valor final
    const adultos = homem + mulher;

    const carnes = await Promise.all(
      carnesSelecionadas.map(async (carne) => {
        console.log("carne", carne);
        return await calculoConsumoPorProduto(carne, {
          homem,
          mulher,
          crianca,
        });
      })
    );

    const bebidas = await Promise.all(
      bebidasSelecionadas.map(
        async (bebida) =>
          await calculoConsumoPorProduto(bebida, {
            homem,
            mulher,
            crianca,
          })
      )
    );

    const extras = await Promise.all(
      extrasSelecionados.map(
        async (extra) =>
          await calculoConsumoPorProduto(extra, {
            homem,
            mulher,
            crianca,
          })
      )
    );

    let total = 0;

    console.log(carnes)
    total += carnes.reduce((total, item) => total + item.preco, 0);

    total += bebidas.reduce((total, item) => total + item.preco, 0);
    total += extras.reduce((total, item) => total + item.preco, 0);

    console.log(Boolean(adultos),total)
    return {
      carnes: carnes,
      bebidas: bebidas,
      extras: extras,

      total,
      porPessoa: adultos ? total / adultos : total ,
      adultos,
    };
  }

  return { calcular };
}
