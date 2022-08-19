function GenerarCaja() {
    //Traer el texto del input
    var texto = document.getElementById ("texto");

    //Traer el contenedor de los textos
    var contenedor = document.getElementById("cajaDeTextos");

    //Aañdir al HTML del contenedor el texto de un div
    //Extraer el texto del elemento input con el id "texto"
    var textoAGenerar = texto.value;
    contenedor.innerHTML = contenedor.innerHTML + `
    <div class="caja-generada">${textoAGenerar}</div>`;
}