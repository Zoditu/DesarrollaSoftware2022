function Order(){
    var [showLoader, setShowLoader] = React.useState(true);
    var [orderId, setOrderId] = React.useState(null);
    const hasUser = document.cookie.includes('SID=');

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
                    case "id":
                        value = value.toUpperCase();
                        axios({
                            method: 'GET',
                            url: `/orders/validate/${value}`
                        }).then(function(result){
                            var valid = result.data.valid == true;
                            if(valid) {
                                setOrderId(value);
                            }
                        }).catch(function(error){

                        }).finally(function(){
                            setShowLoader(false);
                        });
                        //orderId = value;
                        //setOrderId(value);
                    break;
                }
            }
        }
    }, []);

    var html = <>
        <Loader visible={showLoader} />
        <header className="main-menu sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a title="Make Up | Home" className="navbar-brand menu-logo me-2" href="/">Make Up</a>
                </div>
            </nav>
        </header>
        <main className="container py-5">
            <h1 className="confirm-message text-center">
                <article className={orderId !== null ? "" : "d-none"}>
                    <span className="material-icons confirm-icon">
                        check_circle_outline
                    </span>
                    <div>Thanks for your purchase!</div>
                    <hr />
                    <div>Your order number is <a href={"/orderTracker/" + orderId}>{orderId}</a></div>
                    <div className="small">Your order is confirmed</div>
                    <div className={!hasUser ? 'd-none' : "small"}>You can view your order status in <a href="/myorders">My Orders</a> page</div>
                </article>
                <article className={orderId === null ? "error-message" : "d-none"}>
                    <span className="material-icons error-icon">
                        error_outline
                    </span>
                    <div>Your order number is invalid</div>
                    <div className={!hasUser ? 'd-none' : "small"}>You can review your orders in <a href="/myorders">My Orders</a> page</div>
                </article>
                <hr />
                <a href="/catalog">Click here to continue exploring our products</a>
            </h1>
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Order />);