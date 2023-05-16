import React, {useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import { fetchPokemon } from '../api/fetchPokemons';

interface PokemonsProps {
    
}

const Pokemons: React.FC<PokemonsProps> = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchAllPokemons = async ()=>{
        const allPokemons = await fetchPokemon()
        setPokemons(allPokemons);
    }
    useEffect(() => {
        
        fetchAllPokemons();
    }, []);
    return (
        <>
        <Header/>
        <main>
            <h1>pokemons</h1>
        </main>
        <footer>Footer</footer>
        </>
    );
};

export default Pokemons;