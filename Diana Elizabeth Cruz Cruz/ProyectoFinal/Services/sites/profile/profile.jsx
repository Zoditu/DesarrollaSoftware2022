const { func } = require("joi");

function Profile()
var [showLoader, setShowLoader] = React.useState(true);
var [user, setUser] = React.useState(null);
var [car, setCar] = React.useState({product:[]});

var userInfo;
if (user !== null) {
    userInfo = <>
    <form onSubmit={function(e){
        e.preventDefault();

        axion({
            method: 'put',
            url: '/users/profile',
            data:{
                name: user.name,
                lastName: user.lastName,
                phone: user.phone,
            }  
        }).then(function(result){
            var newUser =  result.data;
            newUser.address = user.address;

            setUser(newUser);
        }).catch(function(error){
            if(error.respose){
                Swal.fire({
                    icon:"error",
                    title: "Error actualizando datos",
                    text: ""
                })
            }
        })

    }}></form>
    </>

}


/*Toast <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
  <div class="toast-body">
Información Actualizada  </div>
  <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
</div> */