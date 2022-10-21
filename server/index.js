const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE)



const cors = require('cors');
const express = require('express');
const app = express();
// app.use(express.json());
app.use(cors());

app.get('/', (res, req) => {
    req.send("Hello World")
})

app.post('/register', (req, res) => {
    const { modelo } = req.body
    const { marca } = req.body
    const { tipo } = req.body
    const { disp } = req.body
    
    let SQL = `INSERT INTO AUTOMOVEIS (MODELO, MARCA, TIPO, DISP) VALUES ('${modelo}', '${marca}', '${tipo}', '${disp}')`
    db.exec(SQL)
})


app.get('/getregisters', (req, res) => {

    db.all('SELECT * FROM AUTOMOVEIS', (err, result) => {
        if (err) console.log(err.mesage)
        else res.send(result);
    })

})



app.listen(3001, () => console.log('Rodando Servidor'))

