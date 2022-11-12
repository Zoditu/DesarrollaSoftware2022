function Texto(props) {
    var [text, setText] = React.useState(props.text);

    return <>
        <input type="text" defaultValue={text} onInput={function(){
            //text = event.target.value;
            setText(event.target.value);
        }}/>
        <h1>{text}</h1>
    </>
}

ReactDOM.createRoot(document.getElementById('app')).render(<Texto text="Valor inicial"/>);