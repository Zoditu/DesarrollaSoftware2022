const express = require('express')
const app = express()
const port = 3000 //localhost: 3000

app.use(express.static('../../')); //permite buscar en el folder de Fernanda Paola Jasso Cisneros
app.use(express.json());

const alumnos = [];

app.get ('/alumnos', function(req, res) { //creando un endpoint llamado alumnos
    res.send(alumnos);
});

app.post('/alumnos', function(req, res) {
    var alumno = req.body; //todos los datos vienen del request body
    alumnos.push(alumno);
    res.send({
        message: 'se creo el alumno',
        alumno: alumno
    })
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});