import { openDatabase } from "expo-sqlite";
import { createTable, insertInto } from "./scripts";

// função que cria o banco e as tabelas iniciais
export function initDatabase() {
  const db = openDatabase("beef_grill.db");
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        
        // cria a tabela de produto 
        tx.executeSql(createTable.produto);

        // cria a tabela de genero_produto
        tx.execSql(createTable.generoProduto);


        
        // adiciona valores iniciais na tabela de produto
        tx.executeSql(insertInto.produto);

        // adiciona valores iniciais na tabela genero_produto
        tx.executeSql(insertInto.generoProduto)
      },
      [],
      resolve,
      (err) => reject(err)
    );
  });
}

export function execSql(querie, params = [], sucess = null) {
  const db = openDatabase("beef_grill.db");

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(querie, params, resolve(sucess), (error) =>
          reject(error)
        );
      },
      (err) => console.log(err),
      () => {
        db.closeAsync();
      }
    );
  });
}
