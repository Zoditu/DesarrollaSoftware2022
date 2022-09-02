var sistemaDeArchivos = require('fs'); //importar una libreria
//NodeJS es una aplicacion de escritorio
sistemaDeArchivos.writeFileSync("hola.txt", "El texto anterior se sobreescribe", {encoding: 'utf-8'}); //crea el archivo, informacion del archivo, encoding