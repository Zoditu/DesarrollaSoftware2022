function GenerarCaja() {
    //Traer el texto del input
    var texto = document.getElementById("texto");

    //Traer el contenedor de texto
    var contenedor = document.getElementById("FilaDeTexto");

    //Añadir un div y extraer texto
    var textoAGenerar = texto.value;
    contenedor.innerHTML = contenedor.innerHTML + `
    <div>${textoAGenerar}</div>
    `;
}