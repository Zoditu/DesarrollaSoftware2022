var nuevoUsuario = {};

function ActualizarDatos (dato, valor) {
    nuevoUsuario[dato] = valor;
    const idPreview = `preview-` + dato;

    var preview = document.getElementById(idPreview);
    if(dato=== `email`){
        preview.setAttribute(`href`, `mailto` + valor);
    } else {
        preview.innerText = valor;
    }
 
}

function Registrar () {

}