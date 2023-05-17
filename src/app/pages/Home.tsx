import Header from '../components/Header/Header';
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

const Home = () => {
    const [selectedId, setSelectedId] = useState<number|undefined>()
    const handleSelectedId = (id: number)=>{
        setSelectedId(id);
    }
    
    return (
        <>
        <Header/>
        <div className='container'>
            <span className='main'>
                <PokemonList handleSelectId={handleSelectedId}/>
            </span>
            <span className='side'>
                <PokemonDetails selectedId={selectedId} />
            </span>
        </div>
        <Footer/>
        </>
    );
};

export default Home;