var sistemaDeArchivos = require('fs');

sistemaDeArchivos.writeFileSync("hola.txt", "Hola Mundo desde NodeJS :)", {
    encoding: 'utf-8'
});