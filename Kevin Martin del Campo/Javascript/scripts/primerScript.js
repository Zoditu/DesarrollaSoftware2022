var frases = [
    {
        texto: "La verdad es lo que es, y sigue siendo verdad aunque se piense al revés",
        autor: "Antonio Machado"
    },
    {
        texto: "De vez en cuando di la verdad para que te crean cuando mientes",
        autor: "Jules Renard"
    },
    {
        texto: "Poesía es la unión de dos palabras que uno nunca supuso que pudieran juntarse, y que forman algo así como un misterio",
        autor: "Federico García Lorca"
    }
];

var contenedorFrases = document.getElementById("frases");
var x = 10;
var texto = "El valor de x es: " + x + " y es entero";
texto = `El valor de x es ${x} y es entero`;
console.log(texto);

var textoParrafo = `Esto es un
párrafo`;
console.log(textoParrafo);

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