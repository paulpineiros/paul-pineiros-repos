import { AppRouter } from './AppRouter';
import { PokemonProvider } from './app/context/PokemonProvider'
import './App.css';

function App() {
  return (
    <PokemonProvider>
			<AppRouter />
		</PokemonProvider>
    
  );
}

export default App;
