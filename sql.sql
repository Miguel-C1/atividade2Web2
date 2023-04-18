drop database usuario;
create database usuario;

use usuario;

CREATE TABLE telefone(
	idTelefone int primary key auto_increment,
    teleFone varchar(250)
);

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(250),
    endereco varchar(250),
    idTelefone int null, 
    FOREIGN KEY (idTelefone) REFERENCES telefone(idTelefone)
);