function ProductCatalog(props){
    const filter = props.query;
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({count: 0});
    var [query, setQuery] = React.useState('');
    var [products, setProducts] = React.useState([]);

    React.useEffect( () => {
        query = window.location.search || '';
    }, []);

    React.useEffect( () => {
        axios ({
            method: 'GET',
            url: '/products/all' + query
        }).then((result)=>{
            setProducts(result.data);
        }).catch((error) =>{
            //TBD
        })
    }, [query]);

    var productCatalog = <h3 className="text-center">No se han encontrado resultados...</h3>
    if (products.length > 0) {
        productCatalog = <Products products={products}/>;
        
    }

    var catalog = <>
        <MainMenu user = { user } cart = { cart }/>
        <main className="container p-0">
            <h1>Catálogo</h1>
            <hr />
            {productCatalog}
        </main>
    </>;
    return catalog;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProductCatalog />)