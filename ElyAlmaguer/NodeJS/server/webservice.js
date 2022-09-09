const express = require('express')
const app = express()
const port = 3000

app.use(express.static("../../"));

app.get('/', (req, res) => {
  var fs = require ('fs');
  var saludo = fs.readFileSync('saludo.txt');
  res.send(saludo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
