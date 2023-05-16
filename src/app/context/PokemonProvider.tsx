import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { PokemonServiceImpl } from "../../core/usecases/PokemonService";
import { PokemonRepositoryImpl } from "../../core/infrastructure/PokemonRepositoryImpl";
import { Pokemon } from "../../core/entities/Pokemon";

export const PokemonProvider = (children:any) => {

    const pokemonRepo = new PokemonRepositoryImpl();
    const pokemonService = new PokemonServiceImpl(pokemonRepo);

    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
	const [globalPokemons, setGlobalPokemons] = useState<Pokemon[]>([]);
	const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const getAllPokemons = async (limit = 10) => {
        const result = await pokemonService.getAllPokemons(limit, offset);
        setAllPokemons([...allPokemons, ...result]);
		setLoading(false);
    }

    const getGlobalPokemons = async () => {
        const result = await pokemonService.getGlobalPokemons();
        setGlobalPokemons([...globalPokemons, ...result]);
		setLoading(false);
    }

    const getPokemonByID = async (id: number) => {
		const result = await pokemonService.getPokemonByID(id);
		return result;
	};

    useEffect(() => {
		getAllPokemons();
	}, [offset]);

	useEffect(() => {
		getGlobalPokemons();
	}, []);

    const onClickLoadMore = () => {
		setOffset(offset + 10);
	};

    return (
		<PokemonContext.Provider
            value={{
                allPokemons,
				globalPokemons,
				getPokemonByID,
                onClickLoadMore,
                loading
            }}
        >
            {children}
        </PokemonContext.Provider>
    )

};
