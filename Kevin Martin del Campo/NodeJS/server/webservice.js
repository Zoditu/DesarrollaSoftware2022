const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../../'));
app.use(express.json());

const alumnos = [];

app.get('/alumnos', function(req, res) {
    res.send(alumnos);
});

app.post('/alumnos', function(req, res) {
    //Datos del alumno
    //Siempre que creamos algo, los datos vienen en el request body (payload)
    var alumno = req.body;
    alumnos.push(alumno);
    res.send({
      message: 'Se creó el alumno',
      alumno: alumno
    });
});



/*
//localhost:3000/saludo
app.post('/saludo', function(req, res) {
    res.status(404).send({
      saludo: "Hola POST!"
    });
})

app.get('/saludo', function(req, res) {
  res.status(404).send({
    saludo: "Hola GET!"
  });
})

app.get('/saludos/s1', function(req, res) {
  res.status(404).send({
    saludo: "Este es el saludo #1 del GET!"
  });
})*/

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});