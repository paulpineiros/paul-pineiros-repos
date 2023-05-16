import { Pokemon } from "./Pokemon";

export interface PokemonRepository {
    getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]>;
    getGlobalPokemons(): Promise<Pokemon[]>;
    getPokemonByID(id:number): Promise<Pokemon>;
}