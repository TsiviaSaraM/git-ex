'use strict'

function onInit(){
    // debugger;
    getAllPokemons(renderPokemon);
}



function renderPokemons(pokemons){
    var strHTML = pokemons.map(pokemon => {
        // console.log(pokemon.name);
    // console.log(pokemon.weight);
    // console.log(pokemon.sprites.front_default);
        // console.log(getPokemon(pokemon.url, renderPokemon));
        return getPokemon(pokemon.url, renderPokemon);
      
    });
    console.log(strHTML);
    document.querySelector('.pokemons-container').innerHTML = strHTML;
}

function renderPokemon(pokemon){
    // console.log('rendering pokemon');
    console.log(pokemon);
    document.querySelector('.pokemons-container').innerHTML += 
    `<div class="pokemon">
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <p>Weight: ${pokemon.weight}</p>
            <img src="${pokemon.sprites.front_default}" alt="pokemon">
    </div>`
    // console.log(pokemon.name);
    // console.log(pokemon.weight);
    // console.log(pokemon.sprites.front_default);
    

    // var text = '<div class=\"pokemon\"><h3>'+pokemon.name+'</h3><p>'+pokemon.weight+'</p><img src=\"'+pokemon.sprites.front_default+'\" alt=\"pokemon\"></div>';
    // console.log(text);
    // return text;
    // var strHTML =
    // `<div class="pokemon">
    //         <h3>${pokemon.name}</h3>
    //         <p>${pokemon.weight}</p>
    //         <img src="${pokemon.sprites.front_default}" alt="pokemon">
    // </div>`;

    // document.querySelector('.pokemons-container').innerHTML += strHTML;
}