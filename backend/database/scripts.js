export const createTable = {
  produto: `CREATE TABLE
    IF NOT EXISTS produto (
        pk_idproduto INTEGER NOT NULL AUTOINCREMENT,
        nome TEXT UNIQUE,
        preco REAL,
        categoria ENUM ("bovina", "frango", "porco", "bebida", "extra") maiorIdade BOOLEAN PRIMARY KEY (pk_idproduto) FOREIGN KEY (fk_categoria) REFERENCES categoria (pk_idcategoria) ON DELETE CASCADE
    );`,

  generoProduto: `CREATE TABLE
    IF NOT EXISTS genero_produto (
        fk_idproduto INTEGER genero ENUM ("homem", "mulher", "crianca") qtdMaxima INTEGER FOREIGN KEY (pk_id) REFERENCES produto (pk_idproduto) ON DELETE CASCADE
    );`,
};

export const insertInto = {
  generoProduto: `INSERT INTO
        genero_produto (fk_idproduto, genero, qtdMaxima)
    VALUES
        (1, 'homem', 543),
        (1, 'mulher', 389),
        (1, 'crianca', 200),
        (2, 'crianca', 150),
        (2, 'mulher', 332),
        (2, 'homem', 545),
        (2, 'homem', 516),
        (3, 'crianca', 219),
        (3, 'mulher', 425),
        (3, 'homem', 566),
        (4, 'homem', 569),
        (4, 'mulher', 369),
        (5, 'mulher', 319),
        (5, 'crianca', 108),
        (5, 'homem', 424),
        (6, 'mulher', 379),
        (6, 'homem', 595),
        (6, 'crianca', 251),
        (7, 'homem', 413),
        (7, 'mulher', 414),
        (8, 'homem', 569),
        (8, 'mulher', 296),
        (9, 'crianca', 159),
        (9, 'mulher', 357),
        (9, 'homem', 507),
        (10, 'mulher', 502),
        (10, 'homem', 1000),
        (11, 'homem', 700),
        (11, 'mulher', 500),
        (11, 'crianca', 300),
        (12, 'crianca', 100),
        (12, 'mulher', 300),
        (12, 'homem', 500),
        (13, 'homem', 10),
        (13, 'mulher', 5),
        (13, 'crianca', 10),
        (14, 'homem', 3),
        (14, 'mulher', 2),
        (14, 'crianca', 2),
        (15, 'homem', 2),
        (15, 'mulher', 2),
        (15, 'crianca', 1);`,

  produto: `INSERT INTO
        produto (nome, preco, categoria, maiorIdade)
    VALUES
        ('contra filé', 30, 'bovina', false),
        ('costela', 40, 'bovina', false),
        ('picanha', 50, 'bovina', false),
        ('peito de frango', 30, 'frango', false),
        ('coxa de frango', 25, 'frango', false),
        ('asa de frango', 20, 'frango', false),
        ('lombo', 30, 'porco', false),
        ('costela de porco', 35, 'porco', false) ('pernil de porco', 40, 'porco', false) ('cerveja (caixa de 18)', 25, 'bebida', true) ('suco', 10, 'bebida', false) ('refrigerante', 10, 'bebida', false) ('guardanapo', 10, 'extra', false) ('pão de alho', 15, 'extra', false) ('espeto de queijo', '15', 'extra', false)`,
};
