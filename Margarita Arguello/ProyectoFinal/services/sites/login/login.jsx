function Login() {

    var [showLoader, setShowLoader] = React.useState(false);
    var [user, setUser] = React.useState({
        email: null,
        password: null
    });

    React.useEffect(function(){
        if(document.cookie.includes("SID=") && document.cookie.includes("TOKEN=")){
            window.location.href = '/';
        }
    }, []);

   /* var menu = <>
        <header className="main-menu sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a title="Miry Cake | Home" className="navbar-brand menu-logo me-2" href="/">Miry Cake</a>
                </div>
            </nav>
        </header>
    </>;
*/

    var html = <>
        <Loader visible={showLoader} />
        <SimpleMenu />
        <main className="container p-0">
            <h1>Iniciar sesión</h1>
            <hr />
            <form onSubmit={function(e){
                e.preventDefault();
                setShowLoader(true);
                    
                axios({
                    method: 'POST',
                    url: '/users/login',
                    data: user
                }).then(function(result){
                    //Añadir un redirect
                    window.location.href = '/';
                }).catch(function(error){
                    if(error.response) {
                        console.log(error.response);
                    }
                }).finally(function(){
                    setShowLoader(false);
                });
            }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="email">
                        <span className="material-icons">
                            email
                        </span>
                    </span>
                    <input value={user.email || ''} onChange={function(e){
                                user.email = e.target.value;
                                setUser(Object.assign({}, user));
                           }}
                           type="email" className="form-control" 
                           placeholder="Email del usuario" 
                           aria-label="Email del usuario" 
                           aria-describedby="email" required/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="password">
                        <span className="material-icons">
                            password
                        </span>
                    </span>
                    <input value={user.password || ''} onChange={function(e){
                                user.password = e.target.value;
                                setUser(Object.assign({}, user));
                           }}
                           type="password" className="form-control" 
                           placeholder="Contraseña del usuario" 
                           aria-label="Contraseña del usuario" 
                           aria-describedby="password" required/>
                </div>
                
                <button className="btn w-100 mb-3">Log In</button>
            </form>
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Login />)