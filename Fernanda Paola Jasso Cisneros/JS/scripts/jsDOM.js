function generarCaja(){
    var user = document.getElementById("texto");
    var showText = document.getElementById("cajaTextos");
    var textoGenerar = user.value;

    showText.innerHTML = showText.innerHTML + `
    <div>${textoGenerar}</div>`;
}