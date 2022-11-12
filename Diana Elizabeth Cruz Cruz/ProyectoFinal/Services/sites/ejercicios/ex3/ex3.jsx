function Diana(){

    var ds22 = "Desarrolla Software";
    var nombre ="Diana Elizabeth Cruz Cruz";

    var html = <>
    <h1>{ds22}</h1>
    <hr/>
    <h2>{nombre}</h2>
    </>

    return html;
    }
    
    ReactDOM.createRoot(document.getElementById('diana')).render(<Diana/>);
