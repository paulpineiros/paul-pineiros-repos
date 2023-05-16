import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../entities/PokemonRepository";

class PokemonDTO {
  id: number = 0;
  name: string = "";
  imageSrc: string = "";
}

export class PokemonRepositoryImpl implements PokemonRepository {
    baseURL = 'https://pokeapi.co/api/v2/';

  async getAllPokemons(limit = 10, offset= 0): Promise<Pokemon[]> {

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
    
    //const res = await fetch(this.jsonUrl);
    //const jsonData = await res.json();
    return results.map((pokemon: PokemonDTO) => new Pokemon(pokemon.id, pokemon.name, pokemon.imageSrc));
  }

  async getGlobalPokemons(): Promise<Pokemon[]> {
    const res = await fetch(
        `${this.baseURL}pokemon?limit=100000&offset=0`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon:any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });
    const results = await Promise.all(promises);
    
    //const res = await fetch(this.jsonUrl);
    //const jsonData = await res.json();
    return results.map((pokemon: PokemonDTO) => new Pokemon(pokemon.id, pokemon.name, pokemon.imageSrc));
  }

  async getPokemonByID(id: number): Promise<Pokemon> {
    const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return new Pokemon(data.id, data.name, data.imageSrc);
  }
}