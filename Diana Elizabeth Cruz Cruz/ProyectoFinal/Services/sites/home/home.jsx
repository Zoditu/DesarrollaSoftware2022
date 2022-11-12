function Home() {
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ count: 0 });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [images, setImages] = React.useState([
        {
            title: 'N/A Test 1',
            description:'N/A Test 1 Desc',
            src: ''
        },
        {
            title: 'N/A Test 2',
            description:'N/A Test 2 Desc',
            src: ''
        },
        {
            title: 'N/A Test 3',
            description:'N/A Test 3 Desc',
            src: ''
        }
    ]);


    React.useEffect(function() {    axios({
        method: 'GET',
        url: '/users/profile'
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
    }, []);

    var buttons = [];
    var items = [];
    for(var i = 0; i < images.length; i++) {
        const image = images[i];
        
        if( i === 0) {
            buttons.push(<button key={i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + (i+1)}></button>);
        } else {
            buttons.push(<button key={i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} aria-label={"Slide " + (i+1)}></button>);
        }

        items.push(
        <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={image.src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>{image.title}</h5>
                <p>{image.description}</p>
            </div>
        </div>);
    }

    var carousel = <>
        <div id="home-carousel" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                {buttons}
            </div>
            <div className="carousel-inner">
                {items}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>;

    var home = <>
        <MainMenu user = { user } cart = { cart } />
        <main className="container p-0">
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
        </main>
        <Alert alert = { alertMessage } />
    </>;

    return home;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);