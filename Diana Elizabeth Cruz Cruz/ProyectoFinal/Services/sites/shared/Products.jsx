//Creación del menú con React
function Menu() {
    return <>
        <h1>Ejercicio 6</h1>
    </>;
}

ReactDOM.createRoot(document.getElementById("menu")).render(<Menu />);

//Creación de una tarjeta de producto
// Labial, rojo, marca Loreal, 50g, mediano, Modelo X, imagen(es), precio
/**
 * @param {Array} products 
 */
function Products(props) {

    const products = props.products;
    var prod = [];

    for(var i = 0; i < products.length; i++) {
        var product = products[i];

        prod.push(<>
            <article className="col-xl-3 col-lg-4 pb-3">
                <div className="card">
                    <div id={"Controls-Carrousel-Product-" + i} className="carousel slide card-img-top" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://s.cornershopapp.com/product-images/3813403.jpg?versionId=GYrVEUfO9R9HHwCS3RDY1DjZJ4eqNnBX" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/077/166/products/labial_l_ore_al_pari_s_color_riche_ultra_matte_no_cage_tester_1-4e84367afdd53ae68516496980960802-1024-1024.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.nailistas.com/wp-content/uploads/2015/06/labiales-color-riche-swatches-review-loreal-02.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={"#Controls-Carrousel-Product-" + i}
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"#Controls-Carrousel-Product-" + i}
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
        
                    <div className="accordion accordion-flush" id={"Accordeon-" + i}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={"Accordeon-Heading-" + i}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={"#Accordeon-Flush-" + i} aria-expanded="false" aria-controls="flush-collapseOne2">
                                    Detalles del producto
                                </button>
                            </h2>
                            <div id={"Accordeon-Flush-" + i} className="accordion-collapse collapse" aria-labelledby={"Accordeon-Heading-" + i}
                                data-bs-parent={"#Accordeon-" + i}>
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Nombre: {product.name}</li>
                                        <li className="list-group-item">Modelo: {product.model}</li>
                                        <li className="list-group-item">Marca: {product.brand}</li>
                                        <li className="list-group-item">Color: {product.color}</li>
                                        <li className="list-group-item">Peso: {product.weight}</li>
                                        <li className="list-group-item">Tamaño: {product.size}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="card-body">
                        <section className="row m-0 w-100 h-100 align-items-center">
                        <span className="float-left precio-producto">{product.price}</span>
                        <button type="button" className="btn btn-primary float-right agregar-producto">
                            <span className="material-icons">
                                add_shopping_cart
                            </span>
                        </button>
                        </section>
                    </div>
                </div>
            </article>
        </>);
    }

    return <>
        <section className="row">
            {prod}
        </section>
    </>;
}

const listaProductos = [
    {
        name: "Labial",
        description: "Esta es la descripción del producto!",
        model: "Pasión",
        brand: "Lorea'l",
        color: "Rojo",
        weight: "45g",
        size: "Mediano",
        price: 120.15
    },
    {
        name: "Labial 2",
        description: "Esta es la descripción del producto!",
        model: "Pasión",
        brand: "Lorea'l",
        color: "Rojo",
        weight: "45g",
        size: "Mediano",
        price: 121.15
    },
    {
        name: "Labial 3",
        description: "Esta es la descripción del producto!",
        model: "Pasión",
        brand: "Lorea'l",
        color: "Rojo",
        weight: "45g",
        size: "Mediano",
        price: 124.15
    }
];

ReactDOM.createRoot(document.getElementById("app")).render(<Products products={listaProductos} />);
