import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { PokemonServiceImpl } from "../../core/usecases/PokemonService";
import { PokemonRepositoryImpl } from "../../core/infrastructure/PokemonRepositoryImpl";
import { Pokemon } from "../../core/entities/Pokemon";

 // @ts-ignore: Unreachable code error
export const PokemonProvider = ({ children }) => {

    const pokemonRepo = new PokemonRepositoryImpl();
    const pokemonService = new PokemonServiceImpl(pokemonRepo);

    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
	const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const getAllPokemons = async (limit = 12) => {
        const result = await pokemonService.getAllPokemons(limit, offset);
        setAllPokemons([...result]);
		setLoading(false);
    }

    const getPokemonByID = async (id: number) => {
		const result = await pokemonService.getPokemonByID(id);
		return result;
	};

    const getPokemonByName = async (name: string) => {
		const result = await pokemonService.getPokemonByName(name);
		return result;
	};

    useEffect(() => {
		getAllPokemons();
	}, [offset]);

    const onClickLoadMore = () => {
		setOffset(offset + 12);
	};

    const onClickLoadLess = () => {
		setOffset(offset - 12);
	};

    return (
		<PokemonContext.Provider
            value={{
                allPokemons,
				getPokemonByID,
                getPokemonByName,
                onClickLoadMore,
                onClickLoadLess,
                loading
            }}
        >
            {children}
        </PokemonContext.Provider>
    )

};
