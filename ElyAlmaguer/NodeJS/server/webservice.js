const express = require('express')
const app = express() //aplicación de express
const port = 3000     //puerto de nuestro webservices.

app.use(express.static('../../'));   //permite acceder a archivos estáticos, y pag. web
app.use(express.json());             //enviar datos en las peticiones del request como json


 const alumnos = [];    //crear un arreglo vacio de alumnos 
                          // endpoint con req (quien hizo la petición) y res (que van a responder)
 app.get('/alumnos', function(req, res) {    
     res.send(alumnos);
 });

 app.post('/alumnos', function(req, res) {

//     //Datos del alumno
//     //Siempre que creamos algo, los datos vienen en el request body (payload) programar el servicio 
//       de formato json app.use(express.json());

     var alumno = req.body;
     alumnos.push(alumno);
     res.send({
       message: 'Se creó el alumno',
       alumno: alumno
     });
 });

 app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
});

//crear un endpoint hostname, localhost:3000/saludo, get es el metodo de petición para que funcione
// 
//   app.get('/saludo/s1', function(req, res){
//   // var fs =rquire('fs');
//   // var saludo= fs.readFileSync('saludo.txt');
//     res.status(404).send({
// //       saludo: "Este es el saludo #1 del GET!!"
//     })
// })
// si programamos Endpoints programados diferente 
//  /alumnos -> GET trae todos los alumnos, con POST crea un alumno, con PUT te pone o modifica un
//alumno ya existente, con DELETE te elimina un alumno existente.

/*
//localhost:3000/saludo   en POST
app.post('/saludo', function(req, res) {
    res.status(404).send({      // (404) PODEMOS DEFINIR QUE NUM. REGRESE LO ENCONTRAMOS EN MOCILLA 
      saludo: "Hola POST!"
    });
})

//se pueden hacer saludos con diferente métodos GET y POST y no interfiere porque se mandan llamar diferente

app.get('/saludo', function(req, res) {
  res.status(404).send({
    saludo: "Hola GET!"
  });
})

// petición en HTML, también se puede abrir en el navegador y crea el H1 igual lo hace google.map
app.get('/saludo', function(req, res){
  // var fs =rquire('fs');
  // var saludo= fs.readFileSync('saludo.txt');
  res.send(`<h1>Hola! en HTML</h1>`);
})

//crear un endpoint hostname, localhost:3000/saludo, get es el metodo de petición, se checa en yarc enviado en json
app.get('/saludo', function(req, res){
  // var fs =rquire('fs');
  // var saludo= fs.readFileSync('saludo.txt');
  res.send({
   saludo: "Hola!"                            //formato json, devuelve un json en el yarc
});
})

app.get('/saludos/s1', function(req, res) {
  res.status(404).send({
    saludo: "Este es el saludo #1 del GET!"
  });
})*/
// este sirve para inciar el servidor en el puerto, y tiene de parametro una función vacia  o (callback)
