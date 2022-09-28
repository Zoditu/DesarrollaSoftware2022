axios({
    method: 'GET',
    url: '/users/profile'
}).then(function (result) {
    $('#title').html(`Bienvenid@ ${result.data.user.name}... Ya tienes sesión :)`)
    //console.log(result.data);
}).catch(function (error) {
    if (error.response) {
        Swal.fire({
            background: 'var(--colors-pink)',
            color: "var(--colors-white)",
            showCloseButton: true,
            allowOutsideClick: false,
            title: 'Iniciar Sesión',
            confirmButtonText: "Iniciar Sesión",
            confirmButtonColor: 'var(--colors-white)',
            html: `<section class="row m-0">
                        <article class="col">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" id="email" class="form-control" placeholder="Correo" aria-label="Correo"
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">**</span>
                                <input type="password" id="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                                    aria-describedby="basic-addon1">
                            </div>
                        </article>
                    </section>`,
            //text: 'Aquí debe venir el formulario del login',
            footer: '<a class="register-link" href="/register">No tiene cuenta? Regístrate</a>',
            showLoaderOnConfirm: true,
            preConfirm: function (x) {
                var email = $("#email").val();
                var password = $("#password").val();

                var payload = {
                    email: email,
                    password: password
                };

                return axios({
                    method: 'POST',
                    url: '/users/login',
                    data: payload
                }).then(function (result) {
                    
                }).catch(function (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                });
            }
        }).then(function (result) {
            if(result.value) {
                window.location.href = window.location.href;
            }
        })
    } else {
        //Ocurrió un error no controlado
        //TBD
        console.log(error);
    }
});