import { initDatabase, execSql } from "../database/initDatabase";

initDatabase();

export default {
  buscarPorIdEGenero: async (genero, fk_produto) =>{
    const selected = await execSql(
      "SELECT * FROM genero_produto WHERE genero = ? and fk_idproduto = ? LIMIT 1",
      [genero, fk_produto],
      (_, { row }) => row
    )

    console.info(selected)
  }
};
