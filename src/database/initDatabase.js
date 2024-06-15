import { createTable, insertInto } from "./scripts"

// função que cria o banco e as tabelas iniciais
const initDatabase = async (db) => {
  
  console.log(db.databaseName)
  db.withExclusiveTransactionAsync(async () => {
    // cria a tabela de produto
    await db.runAsync(createTable.produto);
  
    // cria a tabela de genero_produto
    await db.runAsync(createTable.generoProduto);
  
    // adiciona valores iniciais na tabela de produto
    await db.runSync(insertInto.produto);
  
    // adiciona valores iniciais na tabela genero_produto
    await db.runSync(insertInto.generoProduto);

  })
};

export {
  initDatabase,
};
