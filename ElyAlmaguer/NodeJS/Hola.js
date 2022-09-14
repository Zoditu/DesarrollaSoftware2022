var sistemaDeArchivos = require ('fs');

sistemaDeArchivos.writeFileSync("hola.txt", "Hola Mundo desde Node JS :)", {encoding: 'utf-8'});

