import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import { PokemonContext } from '../../context/PokemonContext';
import { Pokemon } from '../../../core/entities/Pokemon';
import '@testing-library/jest-dom'

const onClickLoadMore = ()=>{}
const onClickLoadLess = ()=>{}
const allPokemons:Pokemon[] = []
const getPokemonByID = ()=>{}
const getPokemonByName = ()=>{}
const loading = false



function renderFooter(value: any) {
    return render(
    <PokemonContext.Provider value={value}>
        <Footer />
      </PokemonContext.Provider>
    );
  }
test('Verify bottons Footer', async () => {
    //ARRANGE
    const valuesTypes ={
        allPokemons,
        getPokemonByID,
        getPokemonByName,
        onClickLoadMore,
        onClickLoadLess,
        loading
    }
    renderFooter(valuesTypes);

    //ACT
    screen.findAllByRole('button')

    //ASSERT
    expect(screen.getByText("Anterior")).toBeInTheDocument();
    expect(screen.getByText("Siguiente")).toBeInTheDocument();
   
})
