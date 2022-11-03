function Register(){

    var [user, setUser] = React.useState({
        name:null,
        lastName:null,
        email: null,
        password: null,
        phone:null,

    });
    
    React.useEffect(function({
        if(document.cookie.includes("SID=") && document.cookie.includes("TOKEN=")){
            window.location.href ='/';
        }
    },[])

}


    var html = <>
    {menu}
    <main className="container p-0">
        <h1>Crear una nueva cuenta</h1>
        <hr />
        <form onSubmit={function(e){
            e.preventDefault();
        }}>
            
        </form>

    </main>

    </>

ReactDOM.createRoot(document.getElementById('app')).render(<Register/>)