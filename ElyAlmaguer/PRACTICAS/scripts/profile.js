constprofile ={
    name: "kevin",
    lastName: "Martin del Campo",
    description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga, consequatur, in, error laudantium maiores ab est praesentium voluptatem porro omnis debitis. Culpa magni et nobis dignissimos sapiente praesentium alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga, consequatur, in, error laudantium maiores ab est praesentium voluptatem porro omnis debitis. Culpa magni et nobis dignissimos sapiente praesentium alias,
}
var main = document.getElementById('main');
main.innerHTML = `
<div class="card text-bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${profile.name} ${profile.lastName}</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">${profile.description}</p>
  </div>
</div>`;