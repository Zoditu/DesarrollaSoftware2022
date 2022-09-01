var nuevoUsuario = {};

function ActualizarDatos(dato, valor) {
    
    nuevoUsuario[dato] = valor;
    const idPreview = 'preview-' + dato;
    var preview = document.getElementById(idPreview);

    if(dato === 'email') {
        preview.setAttribute('href', 'mailto:' + valor);
    } else {
        if(dato === 'styleType') {
            const card = document.getElementById('card-preview');
            //Cual es el stylo a aplicar
            card.className = "card preview";
            /*if(valor === `Secondary`){
                card.className = card.className + " text-bg-secondary";
            } else if (valor === 'Forest') {
                card.className = card.className + " theme-forest";
            }*/
            //switch funciona solo cuando tiene sentencia if anidadas pero solo si cumplen:
            //*Todos los if es una misma variable 
            //*La comprobacion es un igual (===)
            switch(valor){
                case 'Secondary':
                    card.className = card.className + " text-bg-secondary";
                    break;
                case 'Forest':
                    card.className = card.className + " theme-forest";
                break;
                default:  

                 break;
            }
        }
        preview.innerText = valor;
    }

}

function Registrar() {
    const registros = document.getElementById('registros');

    nuevoUsuario.styleType = nuevoUsuario.styleType || "Default";
    var theme = '';
    switch(nuevoUsuario.styleType) {        
        case 'Secondary':
           theme = "text-bg-secondary";
            break;
        case 'Forest':
            theme = "theme-forest";
            break;
        default:  

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
            Edad: <span>${nuevoUsuario.edad}</span>
            <br>
            Sexo: <span>${nuevoUsuario.sexo}</span>
            <br>
            Firma: <span>${nuevoUsuario.tos === true}</span>
            <br>
            Tema: <span>${nuevoUsuario.styleType}</span>
        </p>
        <a  href="mailto:${nuevoUsuario.email}" class="btn btn-primary">Contactar</a>
    </div>
</div>`;

}