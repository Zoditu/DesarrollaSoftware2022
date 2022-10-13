function Lista (){

    const lista= [10, 20, 30, 40, 50];

    var elementosLista = [];
    //var texto ="";
    //var [texto, setTexto]
    var [texto, setTexto]= React.useState("");
    } 

    for (var i = 0; i <lista.length; i++) {
        //texto += lista[i] + "\n";
        elementosLista.push(<li></li>);
        };

   var html = <>
   <h1>Lista de elementos</h1>
   <hr />
   <ul>
   <textarea defaultValue={texto}></textarea>
    <ul></ul>
    </>
       return html;  

    ReactDOM.createRoot(document.getElementById('app')).render(<Lista/>)