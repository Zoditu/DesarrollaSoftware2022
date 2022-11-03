function Alert(props) {

    if(props.alert.showAlert === true) {
        return <div className="alert text-center alert-danger error-login error-login-transition" role="alert">{props.alert.message}</div>
    }
    return <div className="alert text-center alert-danger error-login" role="alert"></div>
}

//<Alert alert={ { showAlert: false, message: "" } } />