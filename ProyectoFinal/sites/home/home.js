axios({
    method: 'GET',
    url: '/users/profile'
}).then(function (result) {
    console.log(result.data);
}).catch(function (error) {
    if (error.response) {
        Swal.fire({
            background: 'var(--colors-pink)',
            color: "var(--colors-white)",
            showCloseButton: true,
            title: 'Login/Register',
            confirmButtonText: "Login",
            text: 'Aquí debe venir el formulario del login',
            footer: '<a class="register-link" href="">No tiene cuenta? Regístrese</a>'
        });
    } else {
        console.log(error);
    }
});