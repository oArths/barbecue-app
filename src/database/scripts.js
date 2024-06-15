const createTable = {
  produto: `CREATE TABLE IF NOT EXISTS produto (
        pk_idproduto INTEGER NOT NULL,
        nome TEXT,
        preco REAL,
        categoria TEXT CHECK(categoria IN ("bovina", "frango", "porco", "bebida", "extra")), maiorIdade BOOLEAN, PRIMARY KEY (pk_idproduto)
    );`,

  generoProduto: `CREATE TABLE IF NOT EXISTS genero_produto (
        fk_idproduto INTEGER, maxHomem INTEGER, maxMulher INTEGER, maxCrianca INTEGER, FOREIGN KEY (fk_idproduto) REFERENCES produto (pk_idproduto) ON DELETE CASCADE
    );`,
};

const insertInto = {
  generoProduto: `INSERT INTO genero_produto (fk_idproduto, maxHomem, maxMulher, maxCrianca)
VALUES
    (1, 500, 300, 170),
    (2, 550, 350, 180),
    (3, 450, 250, 190),
    (4, 550, 350, 175),
    (5, 500, 300, 185),
    (6, 600, 400, 195),
    (7, 550, 350, 180),
    (8, 600, 400, 190),
    (9, 500, 300, 170),
    (10, 550, 350, 0),
    (11, 600, 400, 185),
    (12, 500, 300, 195),
    (13, 3, 2, 160),
    (14, 2, 1, 170),
    (15, 1, 1, 180);`,

  produto: `INSERT INTO
        produto (nome, preco, categoria, maiorIdade)
    VALUES
        ("contra file", 30, "bovina", false),
        ("costela", 40, "bovina", false),
        ("picanha", 50, "bovina", false),
        
        ("peito de frango", 30, "frango", false),
        ("coxa de frango", 25, "frango", false),
        ("asa de frango", 20, "frango", false),
        
        ("lombo", 30, "porco", false),
        ("costela de porco", 35, "porco", false),
        ("pernil de porco", 40, "porco", false),

        ("cerveja (caixa de 18)", 25, "bebida", true),
        ("suco", 10, "bebida", false),
        ("refrigerante", 10, "bebida", false),
        ("guardanapo", 10, "extra", false),

        ("pao de alho", 15, "extra", false),
        ("espeto de queijo", "15", "extra", false);`,
};

module.exports = {
  createTable,
  insertInto,
};
