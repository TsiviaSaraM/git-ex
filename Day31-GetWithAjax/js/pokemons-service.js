'use strict'

function getAllPokemons(onSuccessRender){
    console.log('getting all pokemons');
    $.get('https://pokeapi.co/api/v2/pokemon', function(pokemons){
        // console.log(pokemons.results);
        sortPokemons(pokemons.results);
        pokemons.results.forEach(pokemon => {
            // getPokemon(pokemon.url, onSuccessRender)
            $.get(pokemon.url, function(pokemon){
                // console.log('getPokemon', pokemon);
                onSuccessRender(pokemon)
            })
            // onSuccessRender(pokemon.results)
        });
    })

}

function getPokemon(url, onSuccessRender){
    console.log('getting pokemon');
    $.get(url, function(pokemon){
        console.log('getPokemon', pokemon);
        onSuccessRender(pokemon)
    })
}

function sortPokemons(allPokemons){
    console.log('sorting pokemons');
    allPokemons.sort(function(pokemon1, pokemon2){
        return pokemon1.name.localeCompare(pokemon2.name);
    })
    console.log(allPokemons);
    // renderPokemons()
}


// getAllPokemons();
// getPokemon('https://pokeapi.co/api/v2/pokemon/1/', renderPokemon);