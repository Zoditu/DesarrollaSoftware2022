function Cart(){
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });

    var products = [];
    for (var i = 0; i < cart.products.length; i++) {
        const product = cart.products[i];
        products.push(
            <>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                        <img style={{height: "18rem"}} src={product.detail.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{product.detail.name}</h5>
                            <div className="card-text">
                                Precio: ${product.detail.price}
                                <br />
                                Cantidad: {product.amount}
                                <hr />
                                Subtotal: ${product.subTotal}
                                <br />
                                Impuesto: ${product.tax}
                                <hr />
                                Total: ${product.total}
                            </div>
                            <p className="card-text"><small className="text-muted">{product.sku}</small></p>
                        </div>
                        </div>
                    </div>
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