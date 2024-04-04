const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./churrasco.db')

let sql = `SELECT * FROM alimentos`

db.all(sql, [], (err, rows) =>{
    if(err){
        console.error(err.message)
    }
    rows.forEach((row) =>{
        console.log(row.nome, row.preco, row.tipo)
    })
})