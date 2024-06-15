import { useSQLiteContext } from "expo-sqlite";

export function userProduto() {
  const db = useSQLiteContext();

  async function buscarPorProduto(fk_produto) {

    try {
      return await db.getFirstAsync(
        "SELECT * FROM  genero_produto WHERE fk_idproduto = ?",
        fk_produto
      );
    } catch (error) {
      throw error;
    }
  }

  // retorna o primeiro correspondente
  async function buscarPorNome(nome) {
    try {
      return await db.getFirstAsync("SELECT * FROM produto WHERE nome = ?", nome);
    } catch (error) {
      throw error;
    }
  }

  return { buscarPorNome, buscarPorProduto }
}
