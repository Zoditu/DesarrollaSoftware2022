function ProductCatalog(properties){
    const filter = properties.query;
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({count: 0});
    var [query, setQuery] = React.useState('');

    React.useEffect(function(){
        query = window.location.search || '';
    }, []);

    var products = [];
    React.useEffect(function(){
        axios({
            method: 'GET',
            url: '/products/all' + query
        }).then(function(result){
            console.table(result.data);
        }).catch(function(error){
            //TBD
        });
    }, [query]);

    var productsCatalog = <h3 className="tex-center">No se han encontrado productos</h3>
    if(products.length > 0){
        productsCatalog = <ProductsF products={products}/>
    }
    
    var catalogpage = <>
        <MainMenu user = {user} cart = {cart}/>
        <main className="container p-0">
            <h1>Catalog</h1>
            <hr/>
            {productsCatalog}
        </main>
    </>;

    return catalogpage;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProductCatalog/>)