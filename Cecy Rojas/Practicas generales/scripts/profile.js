const profile = {
    name: "Cecy",
    lastName: "Rojas Castro",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea atque obcaecati quos accusamus sapiente sit, hic cupiditate tempore nisi ipsa iure totam explicabo adipisci corporis ab dignissimos. Totam, voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet inventore dolores explicabo, architecto fugit esse aliquid adipisci officia dolor, nemo illum maxime nihil quisquam, earum mollitia fuga iure quos reprehenderit."
}

var main = document.getElementById('main');
main.innerHTML = `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${profile.name} ${profile.lastName}</div>
        <div class="card-body">
            <h5 class="card-title">Perfil del usuario</h5>
            <p class="card-text">${profile.description}</p>
        </div>
    </div>`;