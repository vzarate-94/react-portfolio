import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio';


import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
