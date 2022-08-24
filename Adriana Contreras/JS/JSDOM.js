var frases = [
    {
        texto:"No hay caminos para la paz; la paz es el camino",
        autor:"Mahatma Gandhi",
    },

    {
        texto:"Haz el amor y no la guerra",
        autor:"John Lennon",
    },

    
    {
        texto:"Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos",
        autor:"Bob Marley",
    },

    
    {
        texto:"Cada día sabemos más y entendemos menos",
        autor:"Albert Einstein",
    },

];

var contenedorFrases = document.getElementById("frases");

AñadirFraseEnPagina(frases[0]);
AñadirFraseEnPagina(frases[1]);
AñadirFraseEnPagina(frases[2]);


function AñadirFraseEnPagina(frase) {
    contenedorFrases.innerHTML = contenedorFrases.innerHTML + `
      <div class="card">
        <div class="card-header">
          Quote
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${frase.texto}</p>
            <footer class="blockquote-footer"><cite title="Source Title">${frase.autor}</cite></footer>
          </blockquote>
        </div>
      </div>`;

}

 



