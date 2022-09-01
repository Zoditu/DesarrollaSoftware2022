var nuevoUsuario = {};

function ActualizarDatos(dato, valor) {
    /* console.log('Dice que actalice el dato: ' + dato);
    console.log('Con el valor: ' + valor) */


    nuevoUsuario[dato] = valor;
    const idPreview = 'preview- ' + dato;
    var preview = document.getElementById(idPreview);

    if(dato === 'email' ) {
        preview.setAttribute('href', 'mailto:' + valor);
    } else {
        if(dato === 'styleType'){
            const card = document.getElementById('card-preview');
            //Cual es el estilo que debo aplicar?
            card.className = "card preview";
            /*if(valor === 'Bootstrap Primary') {
                card.className = card.className + " text-bg-primary";
            } else if(valor === 'Forest Theme') {
                card.className = card.className + " theme-forest";
            } else if(valor === 'Bootstrap Secondary') {
                card.className = card.className + " text-bg-secondary";
            } else if(valor === 'Bootstrap Danger') {
                card.className = card.className + " text-bg-danger";
            } else {
                //Otra cosa
            }*/
            //Switch: Funciona solo cuando tienen sentencias if anidadas
            //Pero, solo si cumplen lo siguiente:
            // * Todos los if comprueban solo la misma variable
            // * La comprobación es un igual o idéntico (==, ===)
            switch(valor) {
                case 'Bootstrap Primary':
                    card.className = card.className + "text-bg-primary";
                    break;
                case 'Bootstrap Secondary':
                    card.className = card.className + "text-bg-secondary";
                    break;
                    case 'Bootstrap Danger':
                        card.className = card.className + " text-bg-danger";
                        break;
                    case 'Forest Theme':
                        card.className = card.className + " theme-forest";
                        break;
                    default:
                        //Otra cosa cuando no se cumple ningún caso...
                        break;
            }
        }

        preview.innerText = valor;
    }

    //var preview = document.getElementById(idPreview);
    //preview.innerText = valor;
}

function Registrar() {
    const registros = document.getElementById('registros');

    nuevoUsuario.styleType = nuevoUsuario.styleType || "Default";
    var theme = ''; //?
    switch(nuevoUsuario.styleType) {
        case 'Bootstrap Primary':
            theme = "text-bg-primary";
            break;
        case 'Bootstrap Secondary': 
            theme = "text-bg-secondary";
            break;
        case 'Bootstrap Danger':
            theme = "text-bg-danger";
            break;
        case 'Forest Theme':
            theme = "theme-forest";
            break;
        default:
            //Otra cosa cuando no se cumple ningún caso...
            break;
    }

    registros.innerHTML += `
    <div class="rendered-card card ${theme}">
        <div class="card-body">
            <h5 class="card-title">
                <span>${nuevoUsuario.name}</span>
                <span>${nuevoUsuario.lastName}</span>
            </h5>
            <p class="card-text">
                Edad: <span>${nuevoUsuario.edad}</span><br>
                Sexo: <span>${nuevoUsuario.sexo}</span><br>
                Firma: <span>${nuevoUsuario.tos === true}</span><br>
                Tema: <span>${nuevoUsuario.styleType}</span>
            </p>
            <a href="mailto:${nuevoUsuario.email}" class="btn btn-primary">Contactar!</a>
        </div>
    </div>`;
}