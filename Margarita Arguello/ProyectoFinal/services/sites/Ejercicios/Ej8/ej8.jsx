function Circulos(props){
    /*paso el arreglo a una variable*/
    var [figuras, setFiguras]=React.useState(Array.from(props.shape));
    const html = []

    
    for (var i = 0; i < figuras.length; i++) {
        
       
        const figura =figuras[i]
       
        var button = <>
            <div className="row align-items-center text-center m-0 h-100 w-100">
                <div className="col">
                    <button onClick={function(){
                        if(figura.type=="circle" ){
                            figura.type="square"
                        }else{
                            figura.type="circle"
                        }
                        setFiguras(Array.from(figuras));
                    }} type="button" className="btn btn-primary">Cambiar</button>
                </div>
            </div>
            </>

        var col=figura.color;
        
        if (figura.show==false) {
            col="grey"         
            }

        if (figura.type=="circle") {    
             html.push( 
            <div style= {{background:col, width:figura.width, height:figura.height, borderRadius: "100%"}}  className="forma">  
            {button}
            </div>        
            );
        }
        else{
            html.push( 
                <div style= {{background:col, width:figura.width, height:figura.height, borderRadius: "0"}}  className="forma">  
                {button}
                </div>
                );
            
            }
 }
    
    return html;
};

const figuras=[{
    type:"circle",
    color:"green",
    width: "10rem",
    height: "10rem",
    show:true
    }, 
    {
    type:"square",
    color:"red",
    width: "8rem",
    height: "8rem",
    show:true
    }, 
    {
    type:"square",    
    color:"blue",
    width: "5rem",
    height: "5rem",
    show:true
    }]



ReactDOM.createRoot(document.getElementById("app")).render(<Circulos shape={figuras}/>);
