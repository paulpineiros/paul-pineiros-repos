
export async function fetchPokemon(){
    const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon'
    );

    if(!response.ok){
        throw new Error('Error al traer los pokemons')
    }
    const pokemons = await response.json();
    /*const result = pokemons.map((pokemon:any )=>({
        id: pokemon.id,
        name: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}`
      
    }))*/

    console.log(pokemons, 'result')
    return pokemons;
}
