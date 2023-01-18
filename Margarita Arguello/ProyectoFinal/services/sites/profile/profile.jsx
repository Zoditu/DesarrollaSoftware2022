function Profile(props) {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });

    React.useEffect(function(){
        if(!document.cookie.includes('SID=') || !document.cookie.includes('TOKEN=')) {
            window.location.href = '/';
        }
    }, []);

    var userInfo;
    if(user !== null) {
        console.log(user);
        userInfo = <>
            <form onSubmit={function(e){
                e.preventDefault();

                const toast = new bootstrap.Toast(document.getElementById('toast'));
                toast.hide();
                setShowLoader(true);
                
                axios({
                    method: 'put',
                    url: '/users/profile',
                    data: {
                        name: user.name,
                        lastName: user.lastName,
                        phone: user.phone
                     }
                }).then(function(result){
                    var newUser = result.data;
                    newUser.address = user.address;
                    toast.show();

                    setUser(newUser);
                }).catch(function(error){
                    if(error.response) {
                        Swal.fire({
                            icon: "error",
                            title: "Error actualizando datos",
                            text: error.response.data
                        });
                    }
                }).finally(function(){
                    setShowLoader(false);
                });
            }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="name">
                        <span className="material-icons">
                            person
                        </span>
                    </span>
                    <input value={user.name || ''} onChange={function(e){
                                user.name = e.target.value;
                                setUser(Object.assign({}, user));
                           }}
                           type="text" className="form-control" 
                           placeholder="Nombre del usuario" 
                           aria-label="Nombre del usuario" 
                           aria-describedby="name" required/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="lastName">
                        <span className="material-icons">
                            person
                        </span>
                    </span>
                    <input value={user.lastName || ''} onChange={function(e){
                                user.lastName = e.target.value;
                                setUser(Object.assign({}, user));
                           }}
                           type="text" className="form-control" 
                           placeholder="Apellidos del usuario" 
                           aria-label="Apellidos del usuario" 
                           aria-describedby="lastName" required/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="phone">
                        <span className="material-icons">
                            phone
                        </span>
                    </span>
                    <input value={user.phone || ''} onChange={function(e){
                                user.phone = e.target.value;
                                setUser(Object.assign({}, user));
                           }}
                           type="tel" className="form-control" 
                           placeholder="Teléfono del usuario" 
                           aria-label="Teléfono del usuario" 
                           aria-describedby="phone" required/>
                </div>

                <button className="btn w-100 mb-3">Actualizar</button>
            </form>

            <Address user={user} updateLoader={setShowLoader} updateUser={setUser} />
        </>;
    }

    var html = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser} />
        <main className="container p-0">
            <h1>Información del usuario</h1>
            {userInfo}
            <div className="toast text-bg-success align-items-center" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        Información actualizada
                    </div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Profile />)