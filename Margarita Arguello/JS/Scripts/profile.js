const profile ={
    name: "Kevin",
    lastName: "Martin del Campo",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ut odio, fugit magnam corporis voluptas aspernatur porro repellat ea iste, quod ab doloremque dignissimos quaerat ratione nostrum saepe reprehenderit repellendus."
}

var main=document.getElementById('main')
main.innerHTML=
`<div class="card text-bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${profile.name} ${profile.lastName}</div>
      <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">${profile.descripcion}</p>
    </div>
</div>
`

