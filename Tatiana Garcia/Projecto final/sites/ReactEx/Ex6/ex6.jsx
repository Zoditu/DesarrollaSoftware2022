function Menu() {
    return <>
        <h1>Ejericio 6</h1>
    </>;
}

ReactDOM.createRoot(document.getElementById("menu")).render(<Menu/>);

/**
 * 
 * @param {Array} products 
 */
function Products(products) {

    var prod = [];

    for(var i=0; i<products.length; i++){
        var product = products[i]

        prod.push(<>
                        <div class="col-xl-3 col-lg-4 pb-3 pr-2">
                    <div class="card" style="width: 18rem;">
                        <div id={"carouselExampleControls-Product-" + i} class="carousel slide card-img-top" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://sss05.suburbia.com.mx/xl/SB4021467.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00360052374721L.jpg"
                                        class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://m.media-amazon.com/images/I/61d5kJv+44L.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target={"carouselExampleControls-Product-" + i}
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target={"carouselExampleControls-Product-" + i}
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Producto - Modelo</h5>
                            <p class="card-text">Descripcion del producto</p>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Detalles del producto
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Nombre</li>
                                            <li class="list-group-item">Color:</li>
                                            <li class="list-group-item">Marca: </li>
                                            <li class="list-group-item">Peso:</li>
                                            <li class="list-group-item">Modelo:</li>
                                            <li class="list-group-item">Tamaño:</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <span class="float-left precio-producto">
                                199.99
                            </span>
                            <button type="button" class="float-rigth agregar-producto">
                                <span class="material-icons">
                                    shopping_cart
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
        </>)
    }
    ReactDOM.createRoot(document.getElementById("menu")).render(<Menu/>);
}