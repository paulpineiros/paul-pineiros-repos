import React, {useState, useEffect, useContext} from 'react';
import Header from '../components/Header/Header';
import { fetchPokemon } from '../api/fetchPokemons';
import { PokemonContext, PokemonContextType } from '../context/PokemonContext';

interface PokemonsProps {
    
}

const Pokemons: React.FC<PokemonsProps> = () => {
    const { allPokemons } = useContext(PokemonContext) as PokemonContextType;
    
    const [pokemons, setPokemons] = useState([]);

    const fetchAllPokemons = async ()=>{
        const allPokemons = await fetchPokemon()
        setPokemons(allPokemons);
    }
    console.log(allPokemons);
    useEffect(() => {
        
        //fetchAllPokemons();
    }, []);
    return (
        <>
       
        <main>
            <h1>cne</h1>
        </main>
        <footer>Footer</footer>
        </>
    );
};

export default Pokemons;