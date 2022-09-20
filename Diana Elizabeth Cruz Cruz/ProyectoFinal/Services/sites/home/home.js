axios({
    method: 'GET',
    url: '/users/profile'
}).then (function(result)){
    console.log(result){
        console.log(result.data);
    }
}