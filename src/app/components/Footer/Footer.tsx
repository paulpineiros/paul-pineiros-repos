import { useContext } from 'react';
import './Footer.css';
import { Props } from './Footer.type';
import { PokemonContext, PokemonContextType } from '../../context/PokemonContext';

const Footer = (props: Props) =>{
    const { onClickLoadMore, onClickLoadLess } = useContext(PokemonContext) as PokemonContextType;

    const handleLoadMore = () =>{
        onClickLoadMore()
    }
    const handleLoadLess = () =>{
        onClickLoadLess()
    }
    return (
        <div className='contentFooter'>
            <button onClick={handleLoadLess}>Anterior</button>
            <button onClick={handleLoadMore}>Siguiente</button>
        </div>
    );
};

export default Footer;