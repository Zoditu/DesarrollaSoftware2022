function ProductCatalog(props) {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [query, setQuery] = React.useState('');
    var [products, setProducts] = React.useState([]);
    var [page, setPage] = React.useState(1);

    React.useEffect(function(){
        query = window.location.search || '';
        var _page = query.match(/page\s*=\s*\d+/g);
        if(_page) {
            var numPag = _page[0].match(/\d+/);
            numPag = parseInt(numPag[0]);
            if(numPag > 0) {
                setPage(numPag);
            }
        }
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
        <footer className="container p-0 text-center">
            <button onClick={function(){
                if(page > 1) {
                    page = page - 1;
                    
                    var url = window.location.href;
                    var pageNum = url.match(/page\s*=\s*\d+/g);
                    if(pageNum) {
                        url = url.replace(pageNum[0],`page=${page}`);
                    } else {
                        if(url.includes('?')) {
                            //añadir al final con &
                            url += `&page=${page}`;
                        }else{
                            //no tiene otros buscadores del query
                            url += `?page=${page}`;
                        }
                    }

                    window.location.href = url;
                }
            }} type="button" className="btn">
                &lt; Anterior
            </button>
            <span className="px-3 page">
                {page}
            </span>
            <button onClick={function(){
                if(page > 0) {
                    page = page + 1;

                    var url = window.location.href;
                    var pageNum = url.match(/page\s*=\s*\d+/g);

                    if(pageNum) {
                        url = url.replace(pageNum[0], `page=${page}`);
                    } else {
                        if(url.includes('?')) {
                            //añadir al final con &
                            url += `&page=${page}`;
                        }else{
                            //no tiene otros buscadores del query
                            url += `?page=${page}`;
                        }
                    }
                    window.location.href = url;
                }
            }}type="button" className="btn">
                Siguiente &gt;
            </button>
        </footer>
        <Alert alert = { alertMessage } />
    </>;

    return catalog;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProductCatalog />);