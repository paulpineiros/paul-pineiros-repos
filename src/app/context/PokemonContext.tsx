import { createContext } from "react";
import { Pokemon } from "../../core/entities/Pokemon";

export type PokemonContextType = {
    allPokemons: Pokemon[];
    globalPokemons: Pokemon[];
    getPokemonByID: (id: number) => Promise<Pokemon>;
    onClickLoadMore:() => void;
    loading: Boolean
  };

export const PokemonContext = createContext<PokemonContextType | null>(null)
