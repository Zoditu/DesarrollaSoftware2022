var sistemaDeArchivos = require('fs');
sistemaDeArchivos.writeFileSync('hola.txt','hola mundo desde Node :)',{ encoding: 'utf-8' });
