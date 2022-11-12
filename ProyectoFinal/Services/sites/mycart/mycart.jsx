function Cart(){
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });
    var envio_invalido = false;

    React.useEffect(function(){
        $('#paypal-button-container').html('');

        var fecha = new Date();
        var productosPaypal = [];
        for (var i = 0; i < cart.products.length; i++) {
            const product = cart.products[i];

            productosPaypal.push({
                name: product.detail.name,
                quantity: product.amount,
                unit_amount: {
                    currency_code: "MXN",
                    value: product.detail.unitaryPrice
                },
                category: "PHYSICAL_GOODS",
                sku: product.sku,
                tax: {
                    currency_code: "MXN",
                    value: product.detail.tax
                }
            });
        }
        
        var resumenPaypal = [{
            amount: {
                currency_code: "MXN",
                value: cart.total,
                breakdown: {
                    item_total: {
                        currency_code: "MXN",
                        value: cart.subTotal
                    },
                    tax_total: {
                        currency_code: "MXN",
                        value: cart.tax
                    }
                }
            },
            description: "Compra en MakeUp Store - " + fecha.toDateString(),
            items: productosPaypal
        }];

        /*var order = {
            purchase_units: resumenPaypal
        };*/

        /*if(user !== null) {
            order.payer = {
                address: {
                    country_code: "MX",
                    address_line_1: `${user.address.street} ${user.address.no} ${user.address.hood}`,
                    address_line_2: user.address.details,
                    admin_area_1: user.address.state,
                    admin_area_2: user.address.city,
                    postal_code: user.address.zip
                },
                name: {
                    given_name: `${user.name} ${user.lastName}`
                },
                phone: {
                    phone_number: {
                        national_number: user.phone
                    },
                    phone_type: 'OTHER'
                }
            }
        }*/

        paypal.Buttons({
            style: {
                layout: 'vertical',
                color:  'black',
                shape:  'rect',
                label:  'paypal'
            },
            createOrder: function(data, actions) {
                //Analizar el carrito y poner cada producto aquí
                return actions.order.create({
                    purchase_units: resumenPaypal
                });
            },
            onApprove: function(data, actions) {
                setShowLoader(true);
                actions.order.capture().then(function(details){
                    if(details.status === 'COMPLETED') {
                        //crear una orden de compra en nuestro servidor en base a
                        //este pago
                        var _cart = Object.assign({}, cart);
                        delete _cart.id;
                        delete _cart.username;

                        axios({
                            method: 'POST',
                            url: `/orders/${details.id}`,
                            data: {
                                email: details.payer.email_address,
                                status: "PAGADO",
                                cart: _cart,
                                shipping: {
                                    name: details.payer.name.given_name,
                                    lastName: details.payer.name.surname,
                                    payer_id: details.payer.payer_id,
                                    address: details.purchase_units[0].shipping.address
                                },
                                summary: "Importe pagado"
                            }
                        }).then(function(result){
                            window.location.href = `/order?id=${details.id}`
                        }).catch(function(error){
                            window.location.href = `/error?type=order&redirect=/mycart`;
                        }).finally(function(){
                            setShowLoader(false);
                        });
                    } else {
                        setShowLoader(false);
                    }
                });
            },
            onCancel: function (data) {
                if(envio_invalido) {
                    Swal.fire({
                        icon: "info",
                        title: "Envío no disponible",
                        text: "Solo realizamos envíos dentro de México. Por favor, actualiza tu dirección."
                    });

                    envio_invalido = false;
                }
            },
            onShippingChange: function(data, actions) {
                if (data.shipping_address.country_code !== 'MX') {
                    envio_invalido = true;
                    return actions.reject();
                }
            
                return actions.resolve();
            },
            onError: function (err) {
                console.log(err);
                //window.location.href = "/error?type=payment&redirect=/mycart";
            }
        }).render('#paypal-button-container');
    }, [cart]);

    var products = [];
    for (var i = 0; i < cart.products.length; i++) {
        const product = cart.products[i];
        products.push(
            <>
                <div className="card position-relative mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                        <img style={{height: "18rem"}} src={product.detail.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{product.detail.name}</h5>
                            <div className="card-text">
                                <article>
                                    Precio: ${product.detail.price}
                                </article>
                                <article className="row align-items-center">
                                    <section className="col">
                                        Cantidad:
                                        <span onClick={function(){
                                            setShowLoader(true);
                                            axios({
                                                method: 'PUT',
                                                url: `/cart/${product.sku}`,
                                                data: {
                                                    amount: -1
                                                }
                                            }).then(function(result){
                                                setCart(result.data);
                                            }).catch(function(error){
                                                //TBD
                                            }).finally(function(){
                                                setShowLoader(false);
                                            });
                                        }} className="material-icons cart-amount-control">
                                            remove_circle_outline
                                        </span>
                                        <span>{product.amount}</span>
                                        <span onClick={function(){
                                            setShowLoader(true);
                                            axios({
                                                method: 'PUT',
                                                url: `/cart/${product.sku}`
                                            }).then(function(result){
                                                setCart(result.data);
                                            }).catch(function(error){
                                                //TBD
                                            }).finally(function(){
                                                setShowLoader(false);
                                            });
                                        }} className="material-icons cart-amount-control">
                                            add_circle_outline
                                        </span>
                                    </section>
                                </article>
                                <hr />
                                <article>
                                    Subtotal: ${product.subTotal}
                                    <div></div>
                                    Impuesto: ${product.tax}
                                    <hr />
                                    Total: ${product.total}
                                </article>
                            </div>
                            <p className="card-text"><small className="text-muted">{product.sku}</small></p>
                        </div>
                        </div>
                    </div>

                    <span className="delete-product">
                        <a onClick={function(){
                            Swal.fire({
                                title: "Eliminar producto",
                                text: "Confirme que desea eliminar el producto: " + product.detail.name,
                                showCancelButton: true
                            }).then(function(result){
                                if(result.value) {
                                    setShowLoader(true);

                                    axios({
                                        method: 'PUT',
                                        url: `/cart/${product.sku}`,
                                        data: {
                                            amount: -product.amount
                                        }
                                    }).then(function(result){
                                        setCart(result.data);
                                    }).catch(function(error){

                                    }).finally(function(){
                                        setShowLoader(false);
                                    });
                                }
                            })
                        }} href="#">
                            Eliminar
                        </a>
                    </span>
                </div>
            </>
        )
    }

    var cartHtml = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser}/>
        <main className="container p-0">
            {products}
            <hr />
            <div id="paypal-button-container"></div>
            <div className="clear"></div>
            <hr />
            <h2 className="text-end">
                Subtotal: ${cart.subTotal}
                <br />
                Impuesto: ${cart.tax}
                <hr />
                Total: ${cart.total}
            </h2>
        </main>
    </>;

    return cartHtml;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Cart />);