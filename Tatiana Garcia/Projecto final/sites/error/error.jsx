function Error(){
    var [message, setMessage] = React.useState(null);
    var [redirect, setRedirect] = React.useState(null);

    React.useEffect(function(){
        var params = window.location.search;
        if(params !== '') {
            params = params.substring(1, params.length);
            var query = params.split('&');
            for(var i = 0; i < query.length; i++) {
                const q = query[i];
                var data = q.split('=');
                var prop = data[0].trim().toLowerCase();
                var value = data[1].trim().toLowerCase();

                switch(prop) {
                    case "type":
                        if(value === 'payment') {
                            message = "There was a problem during your payment process. Please try again.";
                            setMessage(message);
                        } else if(value === 'order') {
                            message = "Your payment was succesful but we couldn't generate your order. Please contact support.";
                            setMessage(message);
                        }
                    break;

                    case "redirect":
                        setRedirect(value);
                    break;
                }
            }
        }
    }, []);

    var html = <>
        <SimpleMenu />
        <main className="container py-5">
            <h1 className="error-message text-center">
            <span className="material-icons error-icon">
                error_outline
            </span>
                <div>Oops! An error ocurred!</div>
                <article className={message !== null ? "" : "d-none"}>
                    <div>{message}</div>
                    <hr />
                    <div>
                        <a href={redirect}>Click here to continue to {redirect}</a>
                    </div>
                </article>
            </h1>
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Error />);