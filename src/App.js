import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroComponent from './component/hero-component';
import Header from './component/header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <HeroComponent />
    </div>
  );
}

export default App;
