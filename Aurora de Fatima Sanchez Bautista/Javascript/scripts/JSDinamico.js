//Tenemos dos variables globales muy importantes:
//window: El tab del navegador
//document: Todo el código del HTML
//document.body:Representa la etiqueta body
//document.head: Representa la etiqueta head

//console.log(document.body);
//document.body.innerHTML = "Hola";


var saludo = "Hola a todos";
document.body.innerHTML = `<div>
                            <h1>${saludo}<h1>
                           </div>`;