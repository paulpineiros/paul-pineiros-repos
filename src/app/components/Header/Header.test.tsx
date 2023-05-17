import {render, screen} from '@testing-library/react'
import Header from './Header'
import { Pokemon } from '../../../core/entities/Pokemon';
import '@testing-library/jest-dom'

test('Verify name and image to be in document', async () => {
    //ARRANGE
   const handlefunc = ()=>{}
    render(<Header handleSearchedName={handlefunc} />);

    //ASSERT
    expect(screen.getByText("Buscar")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
   
})
