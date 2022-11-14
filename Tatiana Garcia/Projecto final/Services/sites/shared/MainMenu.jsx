function LoginUser(props) {
    var login;

    if(props.mobile === true ){
        if(props.user === null) {
            login = 
            <article className="d-lg-none d-block mb-2">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Anónimo -
                                <span className="material-icons">
                                    shopping_cart
                                </span> ({props.cart.products.length})
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body p-0">
                                <ul className="list-group">
                                    <li className="list-group-item p-0">
                                        <a href="/login ">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Login
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item p-0">
                                        <a href="/mycart">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Mi Carrito
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        } else {
            login  = 
            <article className="d-lg-none d-block mb-2">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                {props.user.name} -
                                <span className="material-icons">
                                    shopping_cart
                                </span> ({props.cart.products.length})
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body p-0">
                                <ul className="list-group">
                                    <li className="list-group-item p-0">
                                        <a href="/profile">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Perfil
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item p-0">
                                        <a href="/myorders">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Mi Pedidos
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item p-0">
                                        <a href="/mycart">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Mi Carrito
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item p-0">
                                        <a href="/users/logout">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Salir
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        }

        return login;
    }

    if(props.user === null) {
        login = 
        <article className="d-lg-block d-none profile nav-item dropdown order-lg-2 order-1">
            <div className="row h-100 align-items-center">
                <div className="col">
                    <a className="nav-link dropdown-toggle" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="user-name">
                            Anónimo 
                        </span>
                        <span className="material-icons">
                            shopping_cart
                        </span> ({props.cart.products.length})
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a href="/mycart" className="dropdown-item">Mi Carrito</a></li>
                    </ul>
                </div>
            </div>
        </article>
    } else {
        login = 
        <article className="d-lg-block d-none profile nav-item dropdown order-lg-2 order-1">
            <div className="row h-100 align-items-center">
                <div className="col">
                    <a className="nav-link dropdown-toggle" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="user-name">
                            {props.user.name}
                        </span>
                        <span className="material-icons">
                            shopping_cart
                        </span> ({props.cart.products.length})
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="/profile">Perfil</a></li>
                        <li><a href="/myorders" className="dropdown-item">Mis pedidos</a></li>
                        <li><a href="/mycart" className="dropdown-item">Mi Carrito</a></li>
                        <li><a className="dropdown-item" href="/users/logout">Salir</a></li>
                    </ul>
                </div>
            </div>
        </article>
    }

    return login;
}

function MainMenu(props) {

    var [categories, setCategories] = React.useState([]);
    var [subCategories, setSubCategories] = React.useState([]);
    var [active, setActive] = React.useState(-1);
    var [actions, setActions] = React.useState(0);
    var [search, setSearch] = React.useState("");
    const totalActions = 3;

    React.useEffect(function(){
        axios({
            method: "GET",
            url: "/category/all",
        }).then(function(result){
            setCategories(result.data);
        }).catch(function(error){
            //TBD
        }).finally(function(){
            actions++;
            if(actions === totalActions) {
                props.updateLoader(false);
            }
            
            setActions(actions);
        });

        axios({
            method: 'GET',
            url: '/cart'
        }).then(function(result){
            props.updateCart(result.data);
        }).catch(function(error){
            //TBD
        }).finally(function(){
            actions++;
            if(actions === totalActions) {
                props.updateLoader(false);
            }
            
            setActions(actions);
        });

        axios({
            method: 'GET',
            url: '/users/profile'
        }).then(function (result) {
            props.updateUser(result.data.user);
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
                                props.updateAlertMessage({ 
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
                    if(result.value) {
                        window.location.href = window.location.href;
                    } else {
                        props.updateAlertMessage({ 
                            showAlert: false, 
                            message: ""
                        });
                    }
                });
            } else {
                //Ocurrió un error no controlado
                //TBD
                console.log(error);
            }
        }).finally(function(){
            actions++;
            if(actions === totalActions) {
                props.updateLoader(false);
            }
            
            setActions(actions);
        });
    }, []);

    var menus = [];
    var keys = {};
    for(var i = 0; i <= categories.length; i++) {
        if(i === categories.length) {
            menus.push(<li onClick={function(){
                window.location.href = `/catalog`;
            }} key={`all-products`}
                onMouseEnter={function() {
                    setActive(index);
                }} style={{ background: index === active ? 'var(--colors-red)' : '' }}>Todos los productos</li>);
            continue;
        }

        const index = i;
        const category = categories[i].category;
        const children = categories[i].children;

        menus.push(
            <li onClick={function(){
                window.location.href = `/catalog?category=${category.id}`;
            }} key={`category-${category.id}`}
                onMouseEnter={function() {
                    var temp = [];
                    for(var j = 0; j < children.length; j++) {
                        const subCategory = children[j];

                        var types = [];
                        for(var z = 0; z < subCategory.types.length; z++) {
                            const type = subCategory.types[z];

                            types.push(<article onClick={function(){
                                window.location.href = `/catalog?category=${category.id}&subCategory=${subCategory.id}&categoryType=${type}`;
                            }} key={`type-${subCategory.id}-${z}`} className="subcategory-type">
                                {type}
                            </article>);
                        }

                        temp.push(<>
                            <div onClick={function(e){
                                if(e.target.tagName !== 'ARTICLE') {
                                    window.location.href = `/catalog?category=${category.id}&subCategory=${subCategory.id}`;
                                }
                            }} key={`subcategory-${category.id}-${subCategory.id}`} className="col-lg sub-category">
                                {subCategory.name}
                                {types}
                            </div>
                        </>);
                    }

                    setSubCategories(Array.from(temp));
                    setActive(index);
                }} style={{ background: index === active ? 'var(--colors-red)' : '' }}>{category.name}</li>
        );
    }

    var subMenu = <>
        <ul>
            {menus}
        </ul>
        <section onMouseLeave={function(){
                setActive(-1);
            }} className="sub-menu">
            <div className="row m-0 p-0 h-100 w-100">
                {subCategories}
            </div>
        </section>
    </>;

    var header = <>
        <header className="main-menu sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a title="Make Up | Home" className="navbar-brand menu-logo me-2" href="/">Make Up</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Make Up</h5>
                            <button type="button" className="btn-close btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <LoginUser mobile = { true } user = { props.user } cart = { props.cart } />
                            <form onSubmit={function(e){
                                    e.preventDefault();
                                    if(search.trim() !== '') {
                                        window.location.href = '/catalog?name=' + search;
                                    }
                                }} className="d-flex w-100 order-lg-1 order-2 me-2" role="search">
                                <input value={search} onChange={function(e){
                                    setSearch(e.target.value);
                                }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn" type="submit">Search</button>
                            </form>
                            <div className="d-lg-none d-block mb-2"></div>
                            <LoginUser user = { props.user } cart = { props.cart } />
                            <section className="d-lg-none d-block menu-navigation container">
                                {subMenu}
                            </section>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="menu-navigation d-lg-block container">
                {subMenu}
            </section>
        </header>
    </>;

    return header;
}