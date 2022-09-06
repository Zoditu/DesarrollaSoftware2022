var nuevoUsuario = {};

function ActualizarDatos(dato, valor) {

    nuevoUsuario[dato] = valor;
    const idPreview = 'preview-' + dato;
    var preview = document.getElementById(idPreview);

    if (dato === 'email') {
        preview.setAttribute('href', 'mailto:' + valor);

    } else {
        if (dato === 'styleType') {
            const card = document.getElementById('card-preview')
            //Cual es el estilo que debo aplicar?
            card.className = "CardPreview";
            /*if(valor === 'Bootstrap Primary'){
                card.className = "card preview text-bg-primary";
            } else if (valor === 'Forest Theme') {
                card.className = card.className + "theme-forest"
            } else if (valor === 'Bootstrap Secondary') {
                card.className = card.className + "theme-forest"
            }else if (valor === 'Bootstrap Danger') {
                card.className = card.className + "theme-forest"
            }*/

            //Switch Funciona solo cuanto tienen sentencias if anida
            //Perom solo si se cumple lo siguiente:
            //*Todos los if comprueban solo la misma variable.
            //*La commprobaciòn es un igual o un identico (== , ====)
            switch (valor) {
                case 'Boostrap Primary':
                    card.className = card.className + "text-bg-primary";
                    break;

                case 'Boostrap Secondary':
                    card.className = card.className + "text-bg-secondary";
                    break;
                case 'Boostrap Danger':
                    card.className = card.className + "text-bg-danger";
                    break;
                case 'Forest Theme':
                    card.className = card.className + "theme-forest";
                    break;
                default:
                    //Otra cosa cuando no se cumple algo

                    break;

            }

        }

        preview.innerText = valor;
    }

    preview.innerText = valor;

    function Registrar() {
        const registros = document.getElementById('registros');

        nuevoUsuario.styleType = nuevoUsuario.styleType || "Default";
        var theme = ''; //?

        //Agregar los temas. y cambiar a theme

        registros.innerHTML = registros.innerHTML +
            `<div class="card ${theme}" >
        <div class="card-body">
          <h5 class="card-title"> <span> ${nuevoUsuario.name} </span> 
          <span id="lastName">${nuevoUsuario.lastname}</span> 
          </h5>
          <p class="card-text">
            Edad: <span>${nuevoUsuario.edad}</span>
            Sexo: <span>${nuevoUsuario.sexo}</span> 
            Firma: <span> ${nuevoUsuario.tos === true} </span>
            <br>
            Tema: <span> ${nuevoUsuario.styleType} </span>
          </p>
          <a href="${nuevoUsuario.email}" class="btn btn-primary">Contactar!</a>
        </div>
      </div>`
    }


    /*
    Funciona solo con el html
    console.log('Está Dice que actualice el dato' + dato);
    console.log('con el valor:' + valor);*/
}