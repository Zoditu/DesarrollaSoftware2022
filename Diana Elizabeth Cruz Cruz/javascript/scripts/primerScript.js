var frases = [
    {
        texto: "frase o cita",
        autor: "nombre del autor"
    },
    {
        texto: "frase o cita1",
        autor: "nombre del autor"
    },
    {
        texto: "frase o cita 2",
        autor: "nombre del autor"
    },
    {
        texto: "frase o cita 3",
        autor: "nombre del autor"
    },
];

var contenedorFrases = document.getElementById ("frases");
AñadirFraseEnPagina(frases[0]);
AñadirFraseEnPagina(frases[1]);
AñadirFraseEnPagina(frases[2]);
AñadirFraseEnPagina(frases[3]);



function AñadirFraseEnPagina (frase){
contenedorFrase.innerHTML = contenedorFrase.innerHTML + ` <div class="card-header">
Quote
</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
  <p>${frases[0].texto}</p>
  <footer class="blockquote-footer"> <cite title="Source Title">${frases[0].autor}</cite></footer>
</blockquote>
</div>
</div>`};