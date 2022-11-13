function Aurora() {
    var DS = "Desarrolla Software 2022";
    var nombre = "Aurora de Fátima Sánchez Bautista";
    var html = <>
        <h1>{DS}</h1>
        <hr />
        <h2>{nombre}</h2>
    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Aurora/>);