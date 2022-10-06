function Menu(){
    return <>
        <h1>Ejercicio 6</h1>
    </>
}

// @param {Array} products

function Products(products){

    var prod = [];

    for(var i = 0; i < products.length; i++){
        var product = products[i];

        prod.push(<>
        <div class="card" style="width: 18rem;">
                <img src="https://i1.adis.ws/i/tom_ford/T1LP_PUSSYCAT_OS_A?$pdp_hero_dsk$&bg=rgb(255,255,255)" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">LONG WEARING LIP COLOR</p>
                </div>
                <div class="accordion accordion-flush" id={"accordionFlushExample" + i}>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id={"flush-headingOne" + i}>
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Product details
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{product.color}</li>
                                <li class="list-group-item">{product.weight}</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                <div class="card-body">
                  <span class="float-left price-product"> {product.price}</span>
                  <button type="button" class="float-right btn btn-outline-light">Add to cart</button>
                </div>
            </div>
        </>)
    }

    return <>
        <section>
            {prod}
        </section>
    </>;
}

const listaProductos = [
    {
        name: "Tom Ford Lipstick",
        color: "Vain",
        weight: "50 g",
        price: "1099.99"
    }
]


ReactDOM.createRoot(document.getElementById('menu')).render(<Menu/>);
ReactDOM.createRoot(document.getElementById('app')).render(<Products/>);