function ProductCatalog(props) {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [query, setQuery] = React.useState('');
    var [products, setProducts] = React.useState([]);

    React.useEffect(function(){
        query = window.location.search || '';
    }, []);

    React.useEffect(function(){
        axios({
            method: 'GET',
            url: '/products/all' + query
        }).then(function(result){
            setProducts(result.data);
        }).catch(function(error){
            //TBD
        })
    }, [query]);

    var productCatalog = <h3 className="text-center">No se han encontrado resultados...</h3>;
    if(products.length > 0) {
        productCatalog = <Products products={products} updateCart={setCart} updateLoader={setShowLoader} />;
    }

    var catalog = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser} updateAlertMessage={setAlertMessage}/>
        <main className="container p-0">
            <h1>Catálogo</h1>
            <hr />
            {productCatalog}
        </main>
        <Alert alert = { alertMessage } />
    </>;

    return catalog;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProductCatalog />);