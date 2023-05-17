import Header from '../components/Header/Header';
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

const Home = () => {
    const [selectedId, setSelectedId] = useState<number|undefined>()
    const [searchedName, setSearchedName] = useState<string>('')
    const handleSelectedId = (id: number)=>{
        setSelectedId(id);
    }
    const handleSearchedName = (name: string)=>{
        setSearchedName(name);
    }
    
    return (
        <>
        <Header handleSearchedName={handleSearchedName}/>
        <div className='container'>
            <span className='main'>
                <PokemonList searchedName={searchedName} handleSelectId={handleSelectedId}/>
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