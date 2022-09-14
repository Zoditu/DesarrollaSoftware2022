 var nuevoUsuario= {};

// function ActualizarDatos(dato, valor ) {
//     console.log (dice que actualice el dato: +dato);
//     console.log(con el valor: + valor):
// }
function ActualizarDatos(dato, valor ) {

    nuevoUsuario[dato] = valor;
    const

    if(dato === ?'email'){
        preview.setAttribute('href', 'mailto:' + valor);
      }
        else {
            if(dato === 'styleType'){
            const card =    document.getElementById( 'card-preview');
    card,ckassName =  "card preview":
    switch( valor){
        case'Bootstrap Primary':
        card.className = card.className + "text-bg-primary";
        break;
        case'Bootstrap Secondary':
        card.className = card.className + "text-bg-Secondary";
        break;
        case'Bootstrap Danger':
        card.className = card.className + "text-bg-Danger";
        break;
        case'Forest Theme':
        card.className = card.className + "text-bg-Forest-Theme";
        break
        default:
            break;
        }
    }
}