function LoginUser(props) {
    var login;

    if(props.mobile === true ){
        if(props.user === null) {
            login = 
            <article className="d-lg-none d-block mb-2">
                <a href="#">Login</a>
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
                                </span> ({props.cart.count})
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
                                        <a href="/cart">
                                            <div className="w-100 h-100 px-3 py-2">
                                                Mi Carrito
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item p-0">
                                        <a href="/logout">
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
        <article className="d-lg-block d-none profile order-lg-2 order-1">
            <div className="row h-100 w-100 align-items-center ">
            <a href="#">Login</a>
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
                        </span> ({props.cart.count})
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="/profile">Perfil</a></li>
                        <li><a href="/cart" className="dropdown-item">Mi Carrito</a></li>
                        <li><a className="dropdown-item" href="/logout">Salir</a></li>
                    </ul>
                </div>
            </div>
        </article>
    }

    return login;
}

function MainMenu(props) {

    //var subMenu = 


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
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <LoginUser mobile = { true } user = { props.user } cart = { props.cart } />
                            <form className="d-flex w-100 order-lg-1 order-2 me-2" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn" type="submit">Search</button>
                            </form>
                            <div className="d-lg-none d-block mb-2"></div>
                            <LoginUser user = { props.user } cart = { props.cart } />
                            <section className="d-lg-none d-block menu-navigation container">
                                <h1>Sub menu</h1>
                            </section>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="menu-navigation d-lg-block container">
                <h1>Sub menu</h1>
            </section>
        </header>
    </>;

    return header;
}