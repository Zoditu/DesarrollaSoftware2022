function OrderTracker() {

    var [showLoader, setShowLoader] = React.useState(false);
    var [order, setOrder] = React.useState(null);

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
                            url: `/orders/${value}`
                        }).then(function(result){
                            var order = result.data.result;
                            if(order) {
                                setOrder(order);
                            }
                        }).catch(function(error){

                        }).finally(function(){
                            setShowLoader(false);
                        });
                    break;
                }
            }
        }
    }, []);

    var orderHTML = <>
        <h1 className="text-center large">No se han podido cargar los datos de la orden...</h1>
        <hr />
    </>;

    if(order != null) {
        var productos = [];
        var default_image = '';

        for (var i = 0; i < order.cart.products.length; i++) {
            const product = order.cart.products[i];
            productos.push( <section key={productos.sku} className="w-100 listed-product px-2 py-3">
                                <div className="row align-items-center w-100 h-100">
                                    <article className="col">
                                        <img style={{ height: "3.5rem", width: "3.5rem", objectFit: "contain" }} src={product.detail.image || default_image} />
                                        <span className="ps-2">{product.detail.name}</span>
                                            <div>
                                                Cantidad: <span className="status">{product.amount} (${product.detail.price} c/u)</span>
                                            </div>
                                            <div>
                                                Subtotal: $<span className="status">{product.subTotal}</span>
                                            </div>
                                            <div>
                                                Impuesto: $<span className="status">{product.tax}</span>
                                            </div>
                                            <div>
                                                Total: $<span className="detail">{product.total}</span>
                                            </div>

                                            <div>
                                                <span className="small">{product.sku}</span>
                                            </div>
                                    </article>
                                </div>
                            </section>)
        }

        orderHTML = <>
            <div className="card position-relative mb-3">
                <div className="row g-0">
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-title">Orden de compra: {order.id}</h4>
                            <h6>Status de orden: <span className="status">{order.status}</span></h6>
                            <textarea className="card-text w-100 form-control" readOnly={true}>{order.summary}</textarea>
                            <div className="card-text">
                                <article>
                                    <hr />
                                    <h6>Detalles del usuario</h6>
                                    <div>Email: <span className="detail">{order.email}</span></div>
                                    <div>Nombre: <span className="status">{order.shipping.name}</span></div>
                                    <div>Apellido(s): <span className="status">{order.shipping.lastName}</span></div>
                                    <div className={order.phone ? "" : "d-none"}>Phone: <span className="detail">{order.phone}</span></div>
                                </article>

                                <article>
                                    <hr />
                                    <h6>Detalles de la compra</h6>
                                    <div>Subtotal: <span className="status">${order.cart.subTotal}</span></div>
                                    <div>Impuesto: <span className="status">${order.cart.tax}</span></div>
                                    <div>Total: <span className="status">$</span><span className="detail">{order.cart.total}</span></div>
                                    <hr />
                                    {productos}
                                    <hr />
                                    <h6>Datos de envío</h6>
                                    <div className="row align-items-center w-100 h-100">
                                        <article className="col">
                                            <div>
                                                <span>
                                                    Dirección:&nbsp;
                                                </span>
                                                <span className="status">
                                                    {order.shipping.address.address_line_1}, {order.shipping.address.address_line_2}, {order.shipping.address.admin_area_1}, {order.shipping.address.admin_area_2}, {order.shipping.address.postal_code}
                                                </span>
                                            </div>
                                        </article>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }

    var html = <>
        <Loader visible={showLoader} />
        <SimpleMenu />
        <main className="container p-0 pt-3">
            {orderHTML}
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<OrderTracker />);