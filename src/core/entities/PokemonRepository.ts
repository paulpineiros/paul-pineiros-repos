import { Pokemon } from "./Pokemon";

export interface PokemonRepository {
    getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]>;
    getPokemonByID(id:number): Promise<Pokemon>;
    getPokemonByName(name:string): Promise<Pokemon>;
}