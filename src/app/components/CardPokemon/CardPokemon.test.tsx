import {render, screen} from '@testing-library/react'
import CardPokemon from './CardPokemon'
import { Pokemon } from '../../../core/entities/Pokemon';
import '@testing-library/jest-dom'

test('Verify name and image to be in document', async () => {
    //ARRANGE
   const pokemon = new Pokemon(1, 'test',"http://", 30, [""],[""],[""],)
    render(<CardPokemon pokemon={pokemon} />);

    //ASSERT
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
   
})
