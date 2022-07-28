import sqlite3 from "sqlite3";
import {
    dirname
} from "path";
import {
    fileURLToPath
} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath)

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "contato" numeric 
);`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES ( NOME, EMAIL, CONTATO)
VALUES 
    ('Hudson Uchoa', 'hudsonuchoa@bol.com.br', 99856847),
    ('Joca Moura', 'jocamoura@gmail.com', 465416541),
    ('Guilherme Da Mata', 'guilhermedamata@yahoo.com', 694164184796)
`

function criaTabelaClt() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de clientes");
    });
}


function populaTabelaClt() {
    db.run(ADD_CLIENTES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de clientes");
    });
}

const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "comanda" INTEGER PRIMARY KEY AUTOINCREMENT,
    "prato" varchar(64),
    "mesa" numeric 
);`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS ( PRATO, MESA)
VALUES 
    ('Macarrão', 1),
    ('Pizza', 2),
    ('Hamburguer', 3)
`

function criaTabelaPd() {
    db.run(PEDIDOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de pedidos");
    });
}


function populaTabelaPd() {
    db.run(ADD_PEDIDOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de pedidos");
    });
}

const CARDAPIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS CARDAPIO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    PRATO varchar(64)
    
);`;

const ADD_CARDAPIO_DATA = `
INSERT INTO CARDAPIO (PRATO)
VALUES 
    ( 'Frutos do mar'),
    ( 'Massa Italiana'),
    ( 'Sobremesa')
`

function criaTabelaCd() {
    db.run(CARDAPIO_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de cardapio");
    });
}


function populaTabelaCd() {
    db.run(ADD_CARDAPIO_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de cardapio");
    });
}

db.serialize(() => {
    criaTabelaClt();
    populaTabelaClt();
    criaTabelaPd();
    populaTabelaPd();
    criaTabelaCd();
    populaTabelaCd()
});