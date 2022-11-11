function Register() {

  var [showLoader, setShowLoader] = React.useState(false);
  var [user, setUser] = React.useState({
      name: null,
      lastName: null,
      email: null,
      confirmEmail: null,
      password: null,
      confirmPassword: null,
      phone: null,
  });

  var [notValids, setNotValids] = React.useState({
      email: true,
      password: true
  });

  React.useEffect(function(){
      if(document.cookie.includes("SID=") && document.cookie.includes("TOKEN=")){
          window.location.href = '/';
      }
  }, []);

//   var menu = <>
//       <header className="main-menu sticky-top">
//           <nav className="navbar navbar-expand-lg">
//               <div className="container-fluid">
//                   <a title="Make Up | Home" className="navbar-brand menu-logo me-2" href="/">Make Up</a>
//               </div>
//           </nav>
//       </header>
//   </>;

  var html = <>
      <Loader visible={showLoader} />
      {/* {menu} */}
      <SimpleMenu />
      <main className="container p-0">
          <h1>Crear una nueva cuenta</h1>
          <hr />
          <form onSubmit={function(e){
              e.preventDefault();
              setShowLoader(true);

              notValids.email = true;
              notValids.password = true;

              if(user.email !== user.confirmEmail) {
                  notValids.email = false;
              }

              if(user.password !== user.confirmPassword) {
                  notValids.password = false;
              }

              if(!notValids.email || !notValids.password) {
                  setNotValids(Object.assign({}, notValids));
                  setShowLoader(false);
                  return false;
              }else {
                  var userValid = Object.assign({}, user);
                  delete userValid.confirmEmail;
                  delete userValid.confirmPassword;

                  axios({
                      method: 'POST',
                      url: '/users/register',
                      data: userValid
                  }).then(function(result){
                      window.location.href = '/login';
                  }).catch(function(error){
                      if(error.response) {
                          console.log(error.response);
                      }
                  }).finally(function(){
                      setShowLoader(false);
                  });
              }
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
                  <span className="input-group-text" id="email">
                      <span className="material-icons">
                          <span className="material-icons">
                              email
                          </span>
                      </span>
                  </span>
                  <input value={user.email || ''} onChange={function(e){
                              user.email = e.target.value;
                              setUser(Object.assign({}, user));
                         }}
                         type="email" className="form-control" 
                         placeholder="Ingresa tu correo" 
                         aria-label="Ingresa tu correo" 
                         aria-describedby="email" required/>

                  <span className="input-group-text" id="confirmEmail">
                      <span className="material-icons">
                          <span className="material-icons">
                              email
                          </span>
                      </span>
                  </span>
                  <input value={user.confirmEmail || ''} onChange={function(e){
                              user.confirmEmail = e.target.value;
                              setUser(Object.assign({}, user));
                         }} style={
                                      { 
                                          boxShadow: user.email === null || user.email === '' ? "unset" :
                                                     user.confirmEmail !== user.email 
                                                     ? "0 0 5px red" : "0 0 5px forestgreen"
                                      }
                                  }
                         type="email" className="form-control" 
                         placeholder="Confirma tu correo" 
                         aria-label="Confirma tu correo" 
                         aria-describedby="confirmEmail" required/>
              </div>

              <div className="input-group mb-3">
                  <span className="input-group-text" id="password">
                      <span className="material-icons">
                          <span className="material-icons">
                              password
                          </span>
                      </span>
                  </span>
                  <input value={user.password || ''} onChange={function(e){
                              user.password = e.target.value;
                              setUser(Object.assign({}, user));
                         }}
                         type="password" className="form-control" 
                         placeholder="Ingresa tu contraseña" 
                         aria-label="Ingresa tu contraseña" 
                         aria-describedby="password" required/>

                  <span className="input-group-text" id="confirmPassword">
                      <span className="material-icons">
                          <span className="material-icons">
                              password
                          </span>
                      </span>
                  </span>
                  <input value={user.confirmPassword || ''} onChange={function(e){
                              user.confirmPassword = e.target.value;
                              setUser(Object.assign({}, user));
                         }} style={
                                      { 
                                          boxShadow: user.password === null || user.password === '' ? "unset" :
                                                     user.confirmPassword !== user.password 
                                                     ? "0 0 5px red" : "0 0 5px forestgreen"
                                      }
                                  }
                         type="password" className="form-control" 
                         placeholder="Confirma tu contraseña" 
                         aria-label="Confirma tu contraseña" 
                         aria-describedby="confirmPassword" required/>
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

              <button className="btn w-100 mb-3">Registrarse</button>
              <div className={notValids.email ? "d-none" : "validation-error"}>
                  Error, compruebe que el email coincida con su confirmación.
              </div>
              <div className={notValids.password ? "d-none" : "validation-error"}>
                  Error, compruebe que las contraseñas coincidan.
              </div>
          </form>
      </main>
  </>;

  return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Register />)