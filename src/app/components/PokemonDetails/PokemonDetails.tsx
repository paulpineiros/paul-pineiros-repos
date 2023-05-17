import {useContext, useEffect, useState} from 'react';
import './PokemonDetails.css';
import { Props } from './PokemonDetails.type';
import { PokemonContext, PokemonContextType } from '../../context/PokemonContext';
import { Pokemon } from '../../../core/entities/Pokemon';
import CardPokemon from '../CardPokemon/CardPokemon';

const PokemonDetails = (props: Props) =>{
    const { selectedId } = props;
    const { getPokemonByID } = useContext(PokemonContext) as PokemonContextType;
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>()

    const handleSlectedPokemon = async (id:number)=>{
        const result = await getPokemonByID(id);
        setSelectedPokemon(result);
    }

    useEffect(() => {
        if(selectedId)
        handleSlectedPokemon(selectedId)
    }, [selectedId]);
    
    if(!selectedPokemon){
        return (<div className='contentDetail'>
                    <div className='info'>Seleccione un Pokemon</div>
                </div> )
    }
    return (
        
        <div className='contentDetail'>
            <div>
            <CardPokemon pokemon={selectedPokemon}/>
            <div className='info'>
                <div className='title'>Peso</div>
                <div className='desc'>{selectedPokemon.weight}</div>
            </div>
            </div>
            
        </div>
    );
};

export default PokemonDetails;