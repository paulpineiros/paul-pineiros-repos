import { useContext, useEffect, useState } from 'react';
import './PokemonList.css';
import { Props } from './PokemonList.type';
import { PokemonContext, PokemonContextType } from '../../context/PokemonContext';
import CardPokemon from '../CardPokemon/CardPokemon';
import { Pokemon } from '../../../core/entities/Pokemon';

const PokemonList = (props: Props) => {
    const { handleSelectId, searchedName} = props
    const { allPokemons, getPokemonByName } = useContext(PokemonContext) as PokemonContextType;
    
    const [searchedPokemon, setSearchedPokemon] = useState<Pokemon>()

    const handlesearchedPokemon = async (name:string)=>{
        try {
            const result = await getPokemonByName(name);
            setSearchedPokemon(result);
        } catch (error) {
            alert("No se encontraron resultados")
        }
    }

    useEffect(() => {
        if(searchedName !== ""){
            handlesearchedPokemon(searchedName)
        } else {
            setSearchedPokemon(undefined)
        }
    }, [searchedName]);

    //SHOW SEARCHED POKEMON
    if(searchedPokemon){
        return (
            <div className='list-pokemon'>
                <div onClick={()=>handleSelectId(searchedPokemon.id)} key={searchedPokemon.id}>
                    <CardPokemon pokemon={searchedPokemon} />
                </div>
            </div>)
    }

    // SHOW ALL POKEMONS
    return (
        <div className='list-pokemon'>
            {
                allPokemons.map(pokemon => (
                    <div onClick={()=>handleSelectId(pokemon.id)} key={pokemon.id}>
                        <CardPokemon pokemon={pokemon} />
                    </div>
                ))
            }
            
        </div>
    );
};

export default PokemonList;