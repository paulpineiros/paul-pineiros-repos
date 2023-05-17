import { createContext } from "react";
import { Pokemon } from "../../core/entities/Pokemon";

export type PokemonContextType = {
    allPokemons: Pokemon[];
    getPokemonByID: (id: number) => Promise<Pokemon>;
    getPokemonByName: (name: string) => Promise<Pokemon>;
    onClickLoadMore:() => void;
    onClickLoadLess:() => void;
    loading: Boolean
  };

export const PokemonContext = createContext<PokemonContextType | null>(null)
