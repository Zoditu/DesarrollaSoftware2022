function generarCaja () {
    // traer en texto del input
    var texto = document.getElementById("texto");

// traer el contenedor de los textos
var contenedor = document.getElementById("CajaDeTextos");
//Añadir al HTML del contenedor el texto en un div
//Extraer el texto del elemento input con el id "texto"
var TextoAGenrear = texto.value;
contenedor.innerHTML = contenedor.innerHTML + `
<div class= "cajaGenerada">${TextoAGenrear}
</div>`;
}