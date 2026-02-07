import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Leadership from './components/Leadership';
import Civilization from './components/Civilization';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Leadership />
        <Civilization />
      </main>
      <Contact />
    </div>
  );
}

export default App;
