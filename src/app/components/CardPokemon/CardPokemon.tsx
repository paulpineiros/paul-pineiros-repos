import './CardPokemon.css';
import { Props } from './CardPokemon.type';

const CardPokemon = (props: Props) =>{
    const { pokemon } = props;
    return (
        <div className='content'>
            <div className='img'>
                <img
                    src={pokemon.imageSrc}
                    alt={`Imagen ${pokemon.name}`} 
                    height={100}
                />
            <div className='info'>
                <div className='number'># {pokemon.id}</div>
                <div className='name'>{pokemon.name}</div>
            </div>
            </div>
            
        </div>
    );
};

export default CardPokemon;