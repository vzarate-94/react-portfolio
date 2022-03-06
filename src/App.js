import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Home />
    </div>
    </Router>
  );
}

export default App;
