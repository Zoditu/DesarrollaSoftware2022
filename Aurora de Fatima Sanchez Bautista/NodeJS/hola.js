var sistemaDeArchivos = require('fs'); //require es una funcion propia de node, fs es una libreria de js

sistemaDeArchivos.writeFileSync("hola.txt", "Hola Mundo desde NodeJS :D", { encoding: 'utf-8' });
