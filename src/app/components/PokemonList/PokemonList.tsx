import {useContext} from 'react';
import './PokemonList.css';
import { Props } from './PokemonList.type';
import { PokemonContext, PokemonContextType } from '../../context/PokemonContext';
import CardPokemon from '../CardPokemon/CardPokemon';

const PokemonList = (props: Props) => {
    const { handleSelectId} = props
    const { allPokemons } = useContext(PokemonContext) as PokemonContextType;
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