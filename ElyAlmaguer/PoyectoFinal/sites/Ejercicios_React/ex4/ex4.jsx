//las funciones en React trabajamos con etiquetas personalizadas, el nombre de la funcion representa una etiqueta y para renderizarla regresa HTML una variable.
//las variables normales no funcionan en react si quiero escribir sería entre corchetes.
// 
//function Ejercicio4() {
//     //  var n1 = 10;     //estas variables normales no funcionan para escribir en react.
//     //  var n2 = 5;      //se cambian por las siguientes variables.
//         var [n1, setN1] = React.useState(10);
//         var [n2, setN2] = React.useState(5);
//         var [Operación, setOp] = React.useState("NA");
// var html = <>
//     <div>
//         <input type="text" defaultvalue={n1} onInput={console.log(intentando escribir n1)}/>   //esto no funciona, no se puede escribir
//     </div>
//     <div>
//         <input type="text" defaultvalue={n2} onInput={console.log(intentando escribir n2}/> 
//     </div>
//     <input type="button" value="Sumar" />
//     <hr />
//     Suma: {n1 + n2}
//   </>;
//</>los eventos como el onInput, onChanche, onClick siempre deben  llevar una función adentro.
                //el event.target.value permite tomar el valor que escribas, se tiene que restar cero para que lo convierta en entero y no junte los números.
   
        function Ejercicio4() {
                   
        var [n1, setN1] = React.useState(10);
        var [n2, setN2] = React.useState(5);
        var [Resultado, setResultado] = React.useState("NA"); 
     var html = <>           
         <div>
             <input type="text" defaultValue={n1} onInput={ 
                function(){ setN1(event.target.value - 0) } }/>
         </div>
         <div>
             <input type="text" defaultValue={n2} onInput={ 
                function(){ setN2(event.target.value - 0) } }/>
         </div>
                    <button type="button" value="Sumar" onClick={
                    function(){setResultado("Suma:"+(n1+n2))}
                    }> + </button>
                    <button type="button" value="Restar" onClick={
                        function(){setResultado("Restar:"+(n1-n2))}
                    }> - </button>
                    <button type="button" value="Multiplicar" onClick={
                        function(){setResultado("Multiplicar:"+(n1*n2))}
                    }> x </button>
                    <button type="button" value="Dividir" onClick={
                        function(){setResultado("Dividir:"+(n1/n2))}
                    }> / </button>
             <hr />
            <h2>{Resultado}</h2>
          </>;

 return html;  
}
ReactDOM.createRoot(document.getElementById('app')).render(<Ejercicio4/>);    
               
                /* <div> Sumar:{n1 + n2}  </div>
                <div> Restar: {n1 - n2} </div>
                <div> Multiplicar: {n1 * n2}</div>
                <div> Dividir: {n1 / n2} </div>  */