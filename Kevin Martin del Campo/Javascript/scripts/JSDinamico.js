//Tenemos dos variables globales muy importantes:
//window: El tab del navegador
//document: Todo el código del HTML
//document.body: Representa la etiqueta body
//document.head: Representa la etiqueta head

//console.log(document.body);
//document.body.innerHTML = "<h1>Mundo</h1>";

//document.body.innerHTML es un texto, es un String.
//Si ya tiene algo, hay que concatenarle...
//Aunque podemos jugar con el órden...
//document.body.innerHTML //"<h2>Hola</h2>"

var texto = "Hola";
//Cómo le hago para que texto diga: "Hola Mundo":
texto = texto + " Mundo";
//texto = "Hola Mundo"

/**
 * <div>
        <h1>Hola</h1>
   </div>
 */

var saludos = ["Hola, chicas :)", "Holi", "Hola Mundo"];
var saludo1 = {
    texto: "Hola, objeto :o"
};

document.body.innerHTML = `<div>
                              <h1>${saludo1.texto}</h1>
                           </div>`;