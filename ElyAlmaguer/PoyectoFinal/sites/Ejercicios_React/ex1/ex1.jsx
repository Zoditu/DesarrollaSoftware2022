function Saludo() {
    var [saludo, setSaludo] = React.useState("DS2022");

    return <h1>{saludo}</h1>;
}

ReactDOM.createRoot(document.getElementById("app")).render(<Saludo/>)