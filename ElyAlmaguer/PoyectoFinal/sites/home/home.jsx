
function Home() {
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ count: 0 });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
//peticion, metodo, url desde la raíz (localhost:300)
    axios({
        method: 'GET',
        url: '/users/profile'
// promesa con un respuesta bien y si no con respuesta error
    }).then(function (result) {
        $('user-name').HTML(`${result.data.user.name}`)
        setUser(result.data.user);
    }).catch(function (error) {
        if (error.response) {
            Swal.fire({
                background: 'var(--colors-pink)',
                color: "var(--colors-white)",
                showCloseButton: true,     //tachita para cerrar el mensaje
                allowOutsideClick: false,  // no permite dar click fuera del modal
                title: 'Iniciar Sesión',   
                confirmButtonText: "Iniciar Sesión",  
                confirmButtonColor: 'var(--colors-white)',  //color de fondo del boton
                //enseguida puede ser texto o html pero con las comillas verbatin (boostrap)
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
            // la propiedad footer pone un pequeño separador y pie de pagina y puedes agregar texto o html (link)
                footer: '<a class="register-link" href="/register">No tienes cuenta? Regístrate</a>',
            //funcion para sacar los datos de user y password antes de, entra solo si le dan al confirm
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    var email = $("#email").val();
                    var password = $("#password").val();
    
                    var payload = {
                        email: email,
                        password: password
                    };
            //y despues hace peticion en axios para hacer el login
                    return axios({
                        method: 'POST',
                        url: '/users/login',
                        data: payload
            //aquí da un resultado (.then) si es positivo o error (.catch).
                    }).then(function (result) {
                        //muestra el detalle del error cuando no tenga sesión iniciada o cookies mal. 
                        //error.response es para saber si hay error al hacer la petición.
                    }).catch(function (error) {
                        //error del endpoint
                        if(error.response) {
                            $('error-login')
                            .html (`Error al iniciar sesión: ${error.response.data.message}`)
                            .addClass('error-login-transition')
                            return false;
                            // setAlertMessage({ 
                            //     showAlert: true, 
                            //     message: `Error al iniciar sesión: ${error.response.data.message}`
                            // });
                            // return false;
                            //`Error al iniciar sesión: ${error.response.data.message}`
                        } else {
                            //Ocurrió un error no controlado (se fue el internet, se quedo sin memoria, etc.)
                            //TBD
                            console.log(error);
                        }
                    });
                }
                //cuando todo resulta bien se refresca la misma página y trae los datos del usuario
            }).then(function (result) {
                console.log(result);
                if(result.value) {
                    window.location.href = window.location.href;
                } else {
                    $('.error-login').removeClass('error-login-transition')
                }
            });
        } else {
            //Ocurrió un error no controlado
            //TBD
            console.log(error);
        }
    });

    var home = <>
        <MainMenu user = { user } cart = { cart } />
        <main className="container">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
                necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
                voluptatem vero eligendi hic assumenda reiciendis?
            </div>
            <section style={{ margin: 3 + 'rem' }}></section>
        </main>
        <Alert alert = { alertMessage } />
    </>;

    return home;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);