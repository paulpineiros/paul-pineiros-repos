import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Pokemons, Pokemon, Items} from './app/pages'

export const AppRouter = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Pokemons/>} />
          <Route path='/pokemons' element={<Pokemons/>} />
          <Route path='/pokemons/:name' element={<Pokemon/>} />
          <Route path='/items' element={<Items/>} />
        </Routes>
      </div>
    </Router>
    
  );
}
