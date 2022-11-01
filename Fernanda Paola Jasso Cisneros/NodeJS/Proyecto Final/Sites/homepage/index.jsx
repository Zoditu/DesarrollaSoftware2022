function Home() {
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ count: 0 });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [images, setImages] = React.useState(null);
    
    React.useEffect(function(){
        axios({
        method: 'GET',
        url: '/user/profile'
    }).then(function (result) {
        setUser(result.data.user);
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
                footer: '<a class="register-link" href="/register">No tienes cuenta? Regístrate</a>',
                showLoaderOnConfirm: true,
                preConfirm: function () {
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
                        if(error.response) {
                            setAlertMessage({ 
                                showAlert: true, 
                                message: `Error al iniciar sesión: ${error.response.data.message}`
                            });
                            return false;
                            //`Error al iniciar sesión: ${error.response.data.message}`
                        } else {
                            //Ocurrió un error no controlado
                            //TBD
                            console.log(error);
                        }
                    });
                }
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
},[]);

    for(var i = 0; i < images.length ; i++){
        if(i === 0){
            button.push()
        } else {
            button.push()
        }
    }
    
    var carousel = <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>

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