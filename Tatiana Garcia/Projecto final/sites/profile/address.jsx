function Address(props) {
    var user = props.user;

    var html = <>
        <form onSubmit={function(e){
            e.preventDefault();

            const toast = new bootstrap.Toast(document.getElementById('toast'));
            toast.hide();
            props.updateLoader(true);
            axios({
                method: 'put',
                url: '/users/profile',
                data: {
                    address: user.address
                }
            }).then(function(result){
                var newUser = result.data;
                newUser.name = user.name;
                newUser.lastName = user.lastName;
                newUser.phone = user.phone;
                toast.show();

                props.updateUser(newUser);
            }).catch(function(error){
                if(error.response) {
                    Swal.fire({
                        icon: "error",
                        title: "Error actualizando datos",
                        text: error.response.data
                    });
                }
            }).finally(function(){
                props.updateLoader(false);
            });
        }}>
            <h2>Dirección de envío</h2>
            <div className="input-group mb-3">
                <span className="input-group-text" id="street">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.street || ''} onChange={function(e){
                            user.address.street = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="Calle" 
                        aria-label="Calle" 
                        aria-describedby="street" required/>

                <span className="input-group-text" id="no">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.no || ''} onChange={function(e){
                            user.address.no = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="number" min="1" max="99999" className="form-control" 
                        placeholder="Número exterior" 
                        aria-label="Número exterior" 
                        aria-describedby="no" required/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="hood">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.hood || ''} onChange={function(e){
                            user.address.hood = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="Colonia" 
                        aria-label="Colonia" 
                        aria-describedby="hood" required/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="city">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.city || ''} onChange={function(e){
                            user.address.city = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="Ciudad" 
                        aria-label="Ciudad" 
                        aria-describedby="city" required/>
                <span className="input-group-text" id="state">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.state || ''} onChange={function(e){
                            user.address.state = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="Estado" 
                        aria-label="Estado" 
                        aria-describedby="state" required/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="country">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.country || ''} onChange={function(e){
                            user.address.country = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="País" 
                        aria-label="País" 
                        aria-describedby="country" required/>
                <span className="input-group-text" id="zip">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.zip || ''} onChange={function(e){
                            user.address.zip = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="number" min="1" max="999999" className="form-control" 
                        placeholder="Código Postal" 
                        aria-label="Código Postal" 
                        aria-describedby="zip" required/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="details">
                    <span className="material-icons">
                        home
                    </span>
                </span>
                <input value={user.address.details || ''} onChange={function(e){
                            user.address.details = e.target.value;
                            props.updateUser(Object.assign({}, user));
                        }}
                        type="text" className="form-control" 
                        placeholder="Referencias" 
                        aria-label="Referencias" 
                        aria-describedby="details" required/>
            </div>

            <button className="btn w-100 mb-3">Actualizar</button>
        </form>
    </>;

    return html;
}