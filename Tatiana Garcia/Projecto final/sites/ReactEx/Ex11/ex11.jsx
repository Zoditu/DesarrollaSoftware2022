function ConteoCirculos(props) {
    var [circulos, setCirculos] = React.useState(props.numCirculos);
    var circle = [];

    for(var i=0; i < circulos; i++) {
        circle.push(<div key={i} className="circle"></div>)
    }

    return <>
        <button onClick={()=>{
            setCirculos(circulos+1);
        }}>+</button>
        <button onClick={
            ()=>{
                if(circulos > 0) {
                setCirculos(circulos-1);
            }}
        }>-</button>
        <hr />
        {circle}
    </>


}

ReactDOM.createRoot(document.getElementById('app')).render(<ConteoCirculos numCirculos={3}/>);