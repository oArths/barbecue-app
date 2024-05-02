import { initDatabase, execSql } from "../database/initDatabase";

initDatabase();

export default {
  buscarPorNome: async (nome) =>
    await execSql(
      "SELECT * FROM produto WHERE nome == ? LIMIT 1",
      [nome],
      (_, { row }) => row
    ),
};
