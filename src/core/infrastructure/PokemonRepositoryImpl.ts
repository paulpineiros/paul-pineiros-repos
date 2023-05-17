import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../entities/PokemonRepository";

/*class PokemonDTO {
  id: number = 0;
  name: string = "";
  imageSrc: string = "";
  weight: number = 0;
  types: string[] = [];
  sprites: string[] = [];
  moves: string[] = []
}*/

export class PokemonRepositoryImpl implements PokemonRepository {
    baseURL = 'https://pokeapi.co/api/v2/';

  async getAllPokemons(limit = 12, offset= 0): Promise<Pokemon[]> {

    const res = await fetch(
        `${this.baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon:any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });
    const results = await Promise.all(promises);
    
    return results.map((pokemon: any) => new Pokemon(
      pokemon.id, 
      pokemon.name,
      pokemon.sprites.other.dream_world.front_default,
      pokemon.weight,
      pokemon.types.map((type:any) =>type.type.name),
      pokemon.moves.map((move:any) =>move.move.name),
      [ pokemon.sprites.back_default,
        pokemon.sprites.back_shiny,
        pokemon.sprites.front_default, 
        pokemon.sprites.front_shiny
      ]
    ));
  }

  async getPokemonByID(id: number): Promise<Pokemon> {
    const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const pokemon = await res.json();
		
    return  new Pokemon(
      pokemon.id, 
      pokemon.name,
      pokemon.sprites.other.dream_world.front_default,
      pokemon.weight,
      pokemon.types.map((type:any) =>type.type.name),
      pokemon.moves.map((move:any) =>move.move.name),
      [ pokemon.sprites.back_default,
        pokemon.sprites.back_shiny,
        pokemon.sprites.front_default, 
        pokemon.sprites.front_shiny
      ]
    );
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${name}`);
		const pokemon = await res.json();
		
    return  new Pokemon(
      pokemon.id, 
      pokemon.name,
      pokemon.sprites.other.dream_world.front_default,
      pokemon.weight,
      pokemon.types.map((type:any) =>type.type.name),
      pokemon.moves.map((move:any) =>move.move.name),
      [ pokemon.sprites.back_default,
        pokemon.sprites.back_shiny,
        pokemon.sprites.front_default, 
        pokemon.sprites.front_shiny
      ]
    );
  }
}