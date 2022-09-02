const auth = {
    user: "admin",
    pass: "password"
};

function login(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    console.log(`Usuario: ${username.value} - Password: ${password.value}`);
}