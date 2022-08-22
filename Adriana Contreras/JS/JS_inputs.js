function GenerarCaja() {
  var texto =  document.getElementById("texto");

  var contenedor = document.getElementById("cajaDeTextos");

  var textoAGenerar = texto.value;

  contenedor.innerHTML = contenedor.innerHTML + `
    <div>${textoAGenerar}</div>
  
  `;


 
}