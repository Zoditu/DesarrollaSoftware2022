const express = require('express')    /*importamos librería de express y creamos un servicor o aplicacion de express*/
const app = express()                 /*declaramos una constante para crear una nueva apl de express */
const port = 3000                     /* constante que decimos cual va a ser nuestro server y de dimos un puerto*/

app.use(express.static("../../"));    /*que la app permita explorar paginas web o archivos estáticos o fisicos  dentro de mi Carpetas*/
//localhosto:3000/saludo
app.get('/saludo', function(req, res) {  /*decirle a express que cree un endpoint y le decimos que metodo (app.get) puede poner*/
  // var fs = require ('fs');
  // var saludo = fs.readFileSync('saludo.txt');
  // res.send('saludo');              /* ENPOINT 'saludo' */
  res.send('hola');                   /*  */
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
