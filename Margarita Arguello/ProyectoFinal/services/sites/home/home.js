/*Se hace una peticion con axios y swal que se declararon en el index */
axios({
    method: 'GET',
    url: '/users/profile'
    }).then(function (result) {
        // si el resultado es corrcto 200 manda el ususario x las cookies
        //$('#title').html(`Bienvenid@ ${result.data.user.name}... Ya tienes sesión :)`)
        //console.log(result.data);
        $('.user-name').html(`${result.data.user.name}`)
        // el carch es un error 
    }).catch(function (error) {
        console.log(error.response)
        // error.response es para error controlados programados en el users.js de ruters
        if (error.response) {
            Swal.fire({
                // si no tengo las cookis es que no he iniciado sesion
                // pongo la pantalla donde solicita usuario y password
                // codigo del swal
                background: 'var(--colors-pink)',
                color: "var(--colors-white)",
                // la tachita para cerrar
                showCloseButton: true,
                // no dar clik fuera del modal
                allowOutsideClick: false,
                title: 'Iniciar Sesión',
                //boton de iniciar secion
                confirmButtonText: "Iniciar Sesión",
                // color de fondo del boton
                confirmButtonColor: 'var(--colors-white)',
                // se puede poner html o text --> el text pone texto
                // html --> codigo  de bustrap para hacer los inputs de usuario y password
                html: `<section class="row m-0">
                            <article class="col">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" id="email" class="form-control" placeholder="Correo" aria-label="Correo"
                                        aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">**</span>
                                    <input type="password" id="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                                        aria-describedby="basic-addon1">
                                </div>
                            </article>
                        </section>`,
                //text: 'Aquí debe venir el formulario del login',
                // se puede poner texto o html en este caso aniade un link
                footer: '<a class="register-link" href="/register">No tiene cuenta? Regístrate</a>',
                //convierte el boton en un loader
                showLoaderOnConfirm: true,
                // uso codigo de jqueri para buscar los objetos de email y password
                preConfirm: function () {
                    // email y password que escribi en el swal
                    var email = $("#email").val();
                    var password = $("#password").val();

                    // los paso al payload para hacer un post
                    var payload = {
                        email: email,
                        password: password
                    };
                    // se hace una peticion con axios
                    // mando el usuario y pasword para hacer el loggin
                    return axios({
                        method: 'POST',
                        url: '/users/login',
                        data: payload
                    }).then(function (result) {
                      // si sale bien no hace nada
                    }).catch(function (error) {
                        if(error.response){
                            //si esta incorrecto el usuario y/o password
                            $('.error-login')
                            .html(`Error al iniciar sesión: ${error.response.data.message}`)
                            .addClass('error-login-transition')
                            return false;
                            // mensaje de swal
                            //Swal.showValidationMessage(`Request failed: ${error.response.data.message}`);
                        }
                        else {
                            // ocurrio un error no controlado
                            console.log('entra aqui');
                            console.log(error);
                        }
                    });
                }
            }).then(function (result) {
                console.log(result);
                if(result.value) {
                    // recargo la pagina del usuario y password
                    window.location.href = window.location.href;
                } 
                else {
                    $('.error-login').removeClass('error-login-transition')
                }
            });
        } else {
            // errores no controlados Ej. BD
            console.log(error);
        }
});