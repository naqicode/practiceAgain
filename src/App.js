import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Japan from './pages/Japan';
import Korea from './pages/Korea';
import Newyork from './pages/Newyork';
import Madagascar from './pages/Madagascar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Japan/>} />
        <Route path='/korea' element={<Korea/>} />
        <Route path='/newyork' element={<Newyork/>} />
        <Route path='/madagascar' element={<Madagascar/>} />

      </Routes>
    </Router>
  );
}

export default App;
