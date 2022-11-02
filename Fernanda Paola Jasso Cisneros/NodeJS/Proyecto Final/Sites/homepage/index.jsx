function Home() {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });
    var [alertMessage, setAlertMessage] = React.useState({ showAlert: false, message: ""});
    var [images, setImages] = React.useState([
        {
            title: 'N/A Test 1',
            description:'N/A Test 1 Desc',
            src: 'https://media.istockphoto.com/photos/make-up-cosmetics-products-against-pink-color-background-picture-id1221677097'
        },
        {
            title: 'N/A Test 2',
            description:'N/A Test 2 Desc',
            src: 'https://media.istockphoto.com/photos/makeup-palette-and-brushes-professional-eyeshadow-palette-picture-id1299164489?k=20&m=1299164489&s=612x612&w=0&h=9w6tmreQf_pdIWpt1inYNsHrlpCPMB391IjozF06XLw='
        },
        {
            title: 'N/A Test 3',
            description:'N/A Test 3 Desc',
            src: 'https://i.pinimg.com/originals/28/87/99/2887999c4d837ed4a068e50046b97891.png'
        }
    ]);

    var [products, setProducts] = React.useState([]);

    React.useEffect(function() {
        axios({
            method: 'GET',
            url: '/products/recommended'
        }).then(function(result){
            setProducts(result.data);
        }).catch(function(error) {
            //TBD
        });
    }, []);

    var buttons = [];
    var items = [];
    for(var i = 0; i < images.length; i++) {
        const image = images[i];
        
        if( i === 0) {
            buttons.push(<button key={"home-carousel-btn" + i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + (i+1)}></button>);
        } else {
            buttons.push(<button key={"home-carousel-btn" + i} type="button" data-bs-target="#home-carousel" data-bs-slide-to={i} aria-label={"Slide " + (i+1)}></button>);
        }

        items.push(
        <div key={"home-carousel-item" + i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={image.src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>{image.title}</h5>
                <p>{image.description}</p>
            </div>
        </div>);
    }

    var carousel = <>
        <div id="home-carousel" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                {buttons}
            </div>
            <div className="carousel-inner">
                {items}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>;

    var home = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser} updateAlertMessage={setAlertMessage}/>
        <main className="container p-0">
            {carousel}
            <div className="m-3"></div>
            <hr />
            <h2 className="text-center">Productos recomendados</h2>
            <hr />
            <Products products={products} updateCart={setCart}/>
        </main>
        <Alert alert = { alertMessage } />
    </>;

    return home;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);