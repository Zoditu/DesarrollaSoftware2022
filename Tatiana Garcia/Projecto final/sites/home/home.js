axios({
    method: 'GET',
    url: '/users/profile'
}).then(function(result){
    console.log(result.data);
}).catch(function(error){
    if(error.response) {
        Swal.fire({
            Swal.fire({
                    background:'var(--colors-pink)',
                    color: "var(--colors-white)",
                    showCloseButton: true,
                    title: 'Login/Register...',
                    confirmButtonText: "Login",
                    text: 'Aquí debe venir el formulario del login',
                    footer: '<a href="">No tienes cuenta? Registrate</a>'
                    })
                 })
    } else {
        console.log(error);
    }
});