var sistemaArchivos = require('fs');

sistemaArchivos.writeFileSync("hola.txt", "Hola Mundo desde NodeJS", { enconding: 'utf-8'});