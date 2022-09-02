var creaArchivo = require('fs');
creaArchivo.writeFileSync("hola.txt", "Texto dentro del archivo :)",{encoding:'utf-8'});