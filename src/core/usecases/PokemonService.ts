import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../entities/PokemonRepository";

export interface ItemService {
    getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]>;
    getPokemonByID(id:number): Promise<Pokemon>;
    getPokemonByName(name:string): Promise<Pokemon>;
}

export class PokemonServiceImpl implements ItemService {
  pokemonRepo: PokemonRepository;

  constructor(pr: PokemonRepository) {
    this.pokemonRepo = pr;
  }

  async getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]> {
    return this.pokemonRepo.getAllPokemons(limit, offset);
  }

  async getPokemonByID(id: number): Promise<Pokemon> {
    return this.pokemonRepo.getPokemonByID(id);
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    return this.pokemonRepo.getPokemonByName(name);
  }
}