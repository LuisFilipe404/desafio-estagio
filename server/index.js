// Importação do Banco de Dados sqlite3

const sqlite3 = require('sqlite3').verbose(); // Importação da dependencia
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE); //Abrir o Banco de dados

// Importação das dependencias

const cors = require('cors'); // Importação do cors
const express = require('express'); // Importação do express (rotas)

const app = express();

app.use(express.json()); // Utilizar arquivos json nas rotas express
app.use(cors()); // Aplicar o cors ao express


// Rotas Express

// Rota de cadastro de automóvel

app.post('/register', (req, res) => {
    
    // Receber dados do front-end (axios)
    
    const { modelo } = req.body;
    const { marca } = req.body;
    const { tipo } = req.body;
    const { disp } = req.body;
    
    let SQL = `INSERT INTO AUTOMOVEIS (MODELO, MARCA, TIPO, DISP) VALUES ('${modelo}', '${marca}', '${tipo}', '${disp}');`;

    db.exec(SQL); //Enviar pro Banco
})


// Rota de listagem

app.get('/getregisters', (req, res) => {

    // Pegar todos os dados do banco
    db.all('SELECT * FROM AUTOMOVEIS;', (err, result) => {
        if (err) console.log(err.mesage);
        else res.send(result);
    });

})

// Rota do delete

app.post('/delete', (req, res) => {

    // Receber dados do front-end (axios)
    
    const { id } = req.body;

    let SQL = `DELETE FROM AUTOMOVEIS WHERE ID = ${id};`;

    db.exec(SQL) // Enviar pro banco
});

//Rota do Update

app.post('/update', (req, res) => {

    // Receber dados do front-end (axios)

    const { id } = req.body;
    const { modelo } = req.body;
    const { marca } = req.body;
    const { tipo } = req.body;
    const { disp } = req.body;

    let SQL = `UPDATE AUTOMOVEIS 
    SET MODELO = '${modelo}', 
        MARCA = '${marca}', 
        TIPO = '${tipo}', 
        DISP = '${disp}' 
    WHERE ID = ${id};`;

    db.exec(SQL); // Enviar pro banco
})

// Listen do server

app.listen(3001, () => console.log('Rodando Servidor'))

