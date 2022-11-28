function MyOrders(props) {
    var [showLoader, setShowLoader] = React.useState(true);
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState({ products: [] });

    React.useEffect(function(){
        if(!document.cookie.includes('SID=') || !document.cookie.includes('TOKEN=')) {
            window.location.href = '/login&redirect=/myorders';
        }
    }, []);

    var orders = [];
    if(user !== null) {
        for(var i = user.orders.length - 1; i >= 0; i--) {
            const order = user.orders[i];
            var _fecha = new Date(order.date);

            var dia = _fecha.getDate();
            dia = dia < 10 ? ('0' + dia) : dia;
            var mes = _fecha.getMonth() + 1;
            mes = mes < 10 ? ('0' + mes) : mes;
            var anio = _fecha.getFullYear();

            var hora = _fecha.getHours();
            hora = hora < 10 ? ('0' + hora) : hora;
            var minutos = _fecha.getMinutes();
            minutos = minutos < 10 ? ('0' + minutos) : minutos;
            var segundos = _fecha.getSeconds();
            segundos = segundos < 10 ? ('0' + segundos) : segundos;

            var fecha = `${dia}/${mes}/${anio} a la(s) ${hora}:${minutos} horas`

            orders.push(<>
                    <div key={order.id} className="user-order p-2">
                        <a target="_blank" href={`/orderTracker?id=${order.id}`}>
                            <h4 className="card-title">Orden de compra: <span className="status">{order.id}</span></h4>
                            <h6>Importe pagado: <span className="status">${order.total}</span></h6>
                            <h6>Status de orden: <span className="status">{order.status}</span></h6>
                            <h6><span className="small">{fecha}</span></h6>
                        </a>
                    </div>
                </>
            );
        }
    }


    var html = <>
        <Loader visible={showLoader} />
        <MainMenu user = { user } cart = { cart } updateLoader={setShowLoader} updateCart={setCart} updateUser={setUser} />
        <main className="container p-0">
            <h1>Mis Pedidos</h1>
            <hr />
            <div className="card position-relative mb-3">
                <div className="row g-0">
                    <div className="col">
                        <div className="card-body">
                            {orders.length ? orders : <h2 className="text-center">No tienes órdenes... agrega algo a tu carrito!</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyOrders />)