//Tenemos dos variables globales muy importantes:
//Window: El tab del navegador
//document: Todo el código HTML
//document.body: Representa la etiqueta del body
//document.head: Representa la etiqueta head

//console.log(document.body);
//document.body.innerHTML = "<H1>Hola </h1>";

//document.body.innerHTML es un textom es un string.
//Si ua tienem hay que concatenarle.
//Aún podemos jugar con el orden.
//document.body.innerHTML //"<h2>Hola</h2>"

var texto = "Hola"
//Como le hago para que texto difa: "Hola Mundo":

texto = texto + "Mundo";
//Texto = "Hola Mundo"

/**
 * <div>
        <h1>Hola</h1>
    </div>
 */

var saludo = ["Hola, Chicas :)", "Holi", "Hola Mundo"];
var saludo1 = {
    texto: "Hola Objeto :o"
};

/*document.body.innerHTML = `<div>
<h1>${saludo}</h1>
</div>`;*/

document.body.innerHTML = `<div>
<h1>${saludo[2]}</h1>
</div>`;

