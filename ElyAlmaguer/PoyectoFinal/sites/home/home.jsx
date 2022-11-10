function Home() {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [images, setImages] = React.useState([                //variable con arreglo de imagenes para que renderice n cantidad de imagenes.
        {                                                     //se pueden actualizar o quitar las imagenes.
            title: 'N/A Test 1',
            description:'N/A Test 1 Desc',
            src: 'https://conceptodefinicion.de/wp-content/uploads/2022/05/materialdidactico_1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1'
        },
        {
            title: 'N/A Test 2',
            description:'N/A Test 2 Desc',
            src: 'https://st4.depositphotos.com/19267056/26369/i/600/depositphotos_263696352-stock-photo-stationery-yellow-background-education-training.jpg'
        },
        {
            title: 'N/A Test 3',
            description:'N/A Test 3 Desc',
            src: 'https://i.pinimg.com/564x/d4/50/c5/d450c5bdd26cde5b2d88877084fe88b9.jpg'
        }
    ]);
//variable para traer los 3 productos.
    var [products, setProducts] = React.useState([]);

    React.useEffect(function() {
//peticion, metodo, url desde la raíz (localhost:3000)        
        axios({
            method: 'GET',
            url: '/products/recommended'
// promesa con un respuesta bien y si no con respuesta error            
        }).then(function(result){
            setProducts(result.data);
        }).catch(function(error) {
            //TBD
        });
    }, []);      //Este parámetro sirve para decirle que solo lo haga una vez.

    var buttons = [];
    var items = [];
    for(var i = 0; i < images.length; i++) {   //por cada imagen del carrousel se renderiza un boton.
        const image = images[i];
        
        if( i === 0) {
            buttons.push(<button key={"home-carousel-btn" + i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + (i+1)}></button>);
        } else {
            buttons.push(<button key={"home-carousel-btn" + i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} aria-label={"Slide " + (i+1)}></button>);
        }
 //i === 0 porque la primer imagen siempre está activa (elemento inicial)
 // cada vez que hacemos push, debe llevar una key no repetida.
 items.push(
        <div key={"home-carousel-item" + i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={image.src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h8>{image.title}</h8>
                <p>{image.description}</p>
            </div>
        </div>);
    }
//este carousel es el del Home
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
//la p-0 en el main, quita el espaciado entre elementos.
    var home = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser} updateAlertMessage={setAlertMessage}/>
        <main className="container p-0">
            {carousel}
{/* para que ponga un margen   */}
            <div className="m-3"></div>
            <hr />
 {/* para centrar Productos recomenados utilizamos el text-center*/}
            <h2 className="text-center">Productos recomendados</h2>
            <hr />
            <products products= {products} updateCart= {setCart} updateLoader= {setShowLoader}/>
        </main>
        <Alert alert = { alertMessage } />
    </>;

    return home;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

// ----------------------------
// function Home() {
//     var [user, setUser] = React.useState(null);  //este tipo de variables se pueden compartir
//     var [cart, setCart] = React.useState({ count: 0 });
//     var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});

// React.useEffect(){
//   //peticion, metodo, url desde la raíz (localhost:300)
//     axios({
//         method: 'GET',
//         url: '/users/profile'
// // promesa con un respuesta bien y si no con respuesta error             
//     }).then(function (result) {
//         setUser(result.data.user);
//     }).catch(function (error) {
//         if (error.response) {
//             Swal.fire({
//                 background: 'var(--colors-pink)',
//                 color: "var(--colors-white)",
//                 showCloseButton: true,             //tachita para cerrar el mensaje
//                 allowOutsideClick: false,          // no permite dar click fuera del modal
//                 title: 'Iniciar Sesión',
//                 confirmButtonText: "Iniciar Sesión",
//                 confirmButtonColor: 'var(--colors-white)',   //color de fondo del boton
// //enseguida puede ser texto o html pero con las comillas verbatin (boostrap)                
//                 html: `<section class="row m-0">
//                             <article class="col">
//                                 <div class="input-group mb-3">
//                                     <span class="input-group-text" id="basic-addon1">@</span>
//                                     <input type="text" id="email" class="form-control" placeholder="Correo" aria-label="Correo"
//                                         aria-describedby="basic-addon1">
//                                 </div>
//                                 <div class="input-group">
//                                     <span class="input-group-text" id="basic-addon1">**</span>
//                                     <input type="password" id="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
//                                         aria-describedby="basic-addon1">
//                                 </div>
//                             </article>
//                        </section>`,
//                 //text: 'Aquí debe venir el formulario del login' 
// // la propiedad footer pone un pequeño separador y pie de pagina y puedes agregar texto o html (link)  
//                 footer: '<a class="register-link" href="/register">No tienes cuenta? Regístrate</a>',
// //funcion para sacar los datos de user y password antes de, entra solo si le dan al confirm                    
//                 showLoaderOnConfirm: true,
//                 preConfirm: function () {
//                     var email = $("#email").val();
//                     var password = $("#password").val();
    
//                     var payload = {
//                         email: email,
//                         password: password
//                     };
//  //y despues hace peticion en axios para hacer el login     
//                     return axios({
//                         method: 'POST',
//                         url: '/users/login',
//                         data: payload
//  //aquí da un resultado (.then) si es positivo o error (.catch).                   
//                     }).then(function (result) {
//   //muestra el detalle del error cuando no tenga sesión iniciada o cookies mal. 
//                         //error.response es para saber si hay error al hacer la petición.                                         
//                     }).catch(function (error) {
//  //error del endpoint
//                         if(error.response) {
//                             setAlertMessage({ 
//                                 showAlert: true, 
//                                 message: `Error al iniciar sesión: ${error.response.data.message}`
//                             });
//                             return false;
//                             //`Error al iniciar sesión: ${error.response.data.message}`
//                         } else {
//                             //Ocurrió un error no controlado
//                             //TBD
//                             console.log(error);
//                         }
//                     });
//                 }
//  //cuando todo resulta bien se refresca la misma página y trae los datos del usuario  
//             }).then(function (result) {
//                 console.log(result);
//                 if(result.value) {
//                     window.location.href = window.location.href;
//                 } else {
//                     // $('.error-login').removeClass('error-login-transition')
//                 setAlertMessage({
//                     showAlert: false,
//                     message:""
//                 })
//                 }
//             });
//         } else {
//             //Ocurrió un error no controlado
//             //TBD
//             console.log(error);
//         }
//     },[]);
// }
  
//     var home = <>
//         <MainMenu user = { user } cart = { cart } />
//         <main className="container">
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//             <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam molestiae? Suscipit beatae
//                 necessitatibus quod maiores cupiditate quasi modi fugiat possimus, asperiores accusantium, repudiandae
//                 voluptatem vero eligendi hic assumenda reiciendis?
//             </div>
//             <section style={{ margin: 3 + 'rem' }}></section>
//         </main>
//         <Alert alert = { alertMessage } />
//     </>;

//     return home;
// }

// ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);