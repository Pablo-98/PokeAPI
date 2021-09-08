const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '200',

};

const {url, type, id} = apiData;
const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    console.log(data)
    const html = `
    <div class="name">${data.name} 
    <img src=${data.sprites.front_default}>
    <div class="details">
    <span>Height: ${data.height}</span>
    <span>Height: ${data.weight}</span>
    </div>
    `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html

}