import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../entities/PokemonRepository";

export interface ItemService {
    getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]>;
    getGlobalPokemons(): Promise<Pokemon[]>;
    getPokemonByID(id:number): Promise<Pokemon>;
}

export class PokemonServiceImpl implements ItemService {
  pokemonRepo: PokemonRepository;

  constructor(pr: PokemonRepository) {
    this.pokemonRepo = pr;
  }

  async getAllPokemons(limit:number, offset?:number): Promise<Pokemon[]> {
    return this.pokemonRepo.getAllPokemons(limit, offset);
  }

  async getGlobalPokemons(): Promise<Pokemon[]> {
    return this.pokemonRepo.getGlobalPokemons();
  }

  async getPokemonByID(id: number): Promise<Pokemon> {
    return this.pokemonRepo.getPokemonByID(id);
  }
}