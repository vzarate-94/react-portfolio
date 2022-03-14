import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Technologies from './components/Technologies/Technologies';


import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/technologies' element={<Technologies />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
