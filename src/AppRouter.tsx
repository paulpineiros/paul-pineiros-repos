import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home} from './app/pages'

export const AppRouter = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
    
  );
}
