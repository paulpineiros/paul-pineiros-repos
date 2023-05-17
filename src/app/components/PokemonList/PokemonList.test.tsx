import {render, screen} from '@testing-library/react'
import PokemonList from './PokemonList'
import { PokemonContext } from '../../context/PokemonContext';
import { Pokemon } from '../../../core/entities/Pokemon';
import '@testing-library/jest-dom'

const onClickLoadMore = ()=>{}
const onClickLoadLess = ()=>{}
const allPokemons:Pokemon[] = [new Pokemon(1, 'test',"http://", 30, [""],[""],[""],)]
const getPokemonByID = ()=>{}
const getPokemonByName = ()=>{}
const loading = false



function renderPokemonList(value: any) {
    return render(
    <PokemonContext.Provider value={value}>
        <PokemonList searchedName='' handleSelectId={()=>{}} />
      </PokemonContext.Provider>
    );
  }
test('Verify Pokemon item load in the list', async () => {
    //ARRANGE
    const valuesTypes ={
        allPokemons,
        getPokemonByID,
        getPokemonByName,
        onClickLoadMore,
        onClickLoadLess,
        loading
    }
    renderPokemonList(valuesTypes);

    //ACT
    screen.findAllByRole('button')

    //ASSERT
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
})
