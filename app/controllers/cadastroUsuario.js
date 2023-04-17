

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

async function alteracaoUsuario(nome, endereco, id) {

    const query = "UPDATE usuario SET nomeUsuario = " + nome + " AND endereco = " + endereco + " WHERE idUsuario = " + id
    return con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows)
    });
}

async function criarUsuario(nome, endereco) {

    const query = "INSERT INTO USUARIO VALUES  (" + nome + ", " + endereco + ")"
    return con.query(query, function (err, result) {
        if (err) throw err;
        console.log("Registro Inserido");
    });

}

async function deletarUsuario(id) {

    const query = "DELETE FROM usuario WHERE idUsuario = " + id
    return con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows)
    })
}

async function listarUsuario(nome) {

    const query = "SELECT * FROM usuario WHERE nomeUsuario LIKE '%" + nome + "%'"
    return con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result)
    })
}

class CrudUsuario {

    async get(req, res) {
        const nome = req.body.nome
        const listagemUsuario = await listarUsuario(nome);

        res.send(listagemUsuario)
    }

    async post(req, res) {
        const nome = req.body.nome
        const endereco = req.body.endereco
        const resultado = criarUsuario(nome, endereco);
      
        res.send(resultado);
    }
    async put(req, res) {
        const nome = req.body.nome
        const endereco = req.body.endereco
        const id = req.body.id

        const resultado = alteracaoUsuario(nome, endereco, id);

        res.send(resultado);
    }
    async del(req, res) {
        const id = req.body.id
        const resultado = deletarUsuario(id)

        res.send(resultado);
    }
}

let crudUsuario = new CrudUsuario;

export default crudUsuario;