function GenerarCaja(){
    // traer el texto
    var texto = document.getElementById("texto");

    // traer el contenedor
    var contenedor = document.getElementById("cajaDeTextos")

    // 
    var textoGenerado = texto.value;
    contenedor.innerHTML = contenedor.innerHTML+`<div>${textoGenerado}</div>`;
}