function Alert(props) {

    if(props.alert.showAlert === true) {
        return <div className="alert text-center alert-danger error-login error-login-transition" role="alert">{props.alert.message}</div>
    }
    return <div className="alert text-center alert-danger error-login" role="alert"></div>
}

// al poner algo complejo como un objeto o un arreglo se pone entre llaves
// si es objeto {{ VALOR}}, si es un arreglo {[]}, si fuese un número {10}, si fuese un boleano {true}

//<Alert alert={{showAlert: false, message: ""}}></>
