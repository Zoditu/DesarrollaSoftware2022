const auth = {
    user: "Tatg",
    pass: "1995"
}

const moderator = {
    user: "mod",
    pass: "1995"
}

function Login() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var isAdmin = false;

    if (auth.user === username.value && auth.pass === password.value) {
        isAdmin = true;
        alert("Tienes todos los permisos");
    } else if (moderator.user === username.value && moderator.pass === password.value) {
        alert("Solo eres moderador!");
    } else {
        alert("USuario no existe ");
    }

    if (isAdmin) {
        var adminPanel = document.getElementById("admin-panel");
        adminPanel.style.display = "block";
        console.log('Como admin solo tu puedes ver esto :3');
    }
    else{
        adminPanel.style.display= "none";
    }
}