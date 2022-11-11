function Cart(){
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });

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

    var cart = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser}/>
        <main className="container p-0">
            {products}
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

    return cart;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Cart />);