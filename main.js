const h1Element = document.querySelector('h1');

h1Element.style.color = 'gray';
h1Element.innerHTML = 'Poke Api';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

function obtenPokemons(url) {
    fetch(url)
    .then( response => response.json() )
    .then( pokemons => recibePokemons(pokemons));
}

function recibePokemons(data) {
    const area = document.querySelector('#app');
    area.innerHTML = '';
    for (let i= 0; i < data.results.length; i++) {
        const cardPokemon = document.createElement('div');
        cardPokemon.innerHTML = `<h1> ${data.results[i].name} </h1>`;
        area.appendChild(cardPokemon);
    }
    const areaBotones = document.createElement('div');
    const botonPrevious = data.previous === null ? ` <button disabled> Anterior </button>`  : ` <button onclick='obtenPokemons("${data.previous}")'> Anterior </button>`
    const botonNext = ` <button onclick='obtenPokemons("${data.next}")'> Siguiente </button>`
    areaBotones.innerHTML = ` ${ botonPrevious } ${ botonNext }`;
    area.appendChild(areaBotones);
}

obtenPokemons(apiUrl);




