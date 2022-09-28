axios({
    method: 'GET',
    url: '/users/profile'
})
.then (function (result){
    console.log (result.data);
})
.catch(function(error) {
    if (error.response) { 
    Swal.fire({
        background:'var(--colors-pink)',
        color:'var(--colors-white)',
        showCloseButton: true,
        icon:'info',
        title: 'Login/Register',
        confirmButtonText: 'Login',
        html:`<section class="row">
        <article class="col">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" id= "email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">**</span>
                <input type="passwprd" id= "password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
            </div>
        </article>
     </section>`
        // html: `<input type="texto" placeholder="Correo">`,
        // text:'Aquí debe venir el formulario del login',
        footer:'<a href="">No tiene cuenta? Regístrese</a>'
        });
    }
    else {
        console.log(error);
    }
    });
