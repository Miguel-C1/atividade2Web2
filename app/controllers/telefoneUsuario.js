const { query } = require('express');
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mcs2809",
    database: "usuario"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Conexão realizada!")
});

async function criarTelefone(teleFone, idUsuario) {
    const query = "INSERT INTO telefone VALUES  (" + teleFone + ")"
    con.query(query)
    const idTelefone = con.query("SELECT max(idTelefone) FROM telefone")
    const query2 = "UPDATE usuario SET idTelefone = " + idTelefone.idTelefone+ "WHERE idUsuario = " + idUsuario
    con.query(query2)
}

async function alterarTelefone(teleFone, idTelefone) {
    const query = 'UPDATE telefone SET teleFone = ' + teleFone + 'WHERE idTelefone = ' + idTelefone
    con.query(query)
}

async function listarTelefone(teleFone) {
    const query = 'SELECT * FROM telefone WHERE telefone LIKE "% '+ teleFone +' %"'
    return con.query(query)
}

async function deletarTelefone(id) {
    const query = "DELETE FROM telefone WHERE idTelefone = " + id
    con.query(query)
}

class CrusTelefone {
    async get(req, res) {
        const teleFone = req.body.teleFone
        const listagemTelefone = await listarTelefone(teleFone);

        res.send(listagemTelefone)
    }

    async post(req, res) {
        const teleFone = req.body.teleFone
        
        const resultado = criarTelefone(endereco);
      
        res.send(teleFone);
    }
    async put(req, res) {
        const teleFone = req.body.teleFone
        const id = req.body.id

        const resultado = alterarTelefone(teleFone, id);

        res.send(resultado);
    }
    async del(req, res) {
        const id = req.body.id
        const resultado = deletarUsuario(id)

        res.send(resultado);
    }
}

let crudTelefone = new CrusTelefone;

export default crudTelefone;