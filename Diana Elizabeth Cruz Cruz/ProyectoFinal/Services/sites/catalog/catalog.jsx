function ProductCatalog(props){
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({count: 0});
    var [alertMessage, setAlertMessage] = React.useState({showalertMessage});
    var [query, setQuery] = React.useState('');
    var [products, setProducts] = React.useState([]);

    React.useEffect(function(){
        query = window.location.search;
    }, []);

    var products = [];
    React.useEffect(function(){
        axios({
            method: 'GET',
            url: '/products/all' + query
        }).then(function(result){
            setProducts

        })
    })
var productCatalog = <h3 className="text-center">No se han encontrado resultdos...</h3>
if(products.lenght > 0){
    productCatalog = <Products product = {products}/>
}

var catalog = <>
    <MainMenu user = {user} cart = {cart} />
    <main className="container p-0">
        <h1>Catalog</h1>
        <hr />
        <Products products = {products}/>
    </main>
    </>;

    return catalog;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProductCatalog/>);