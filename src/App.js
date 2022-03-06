import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
