import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Home from '../../components/Home';
import About from '../../components/About';
import Projets from '../../components/Projets';

function App() {
  return (
    <main>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projets />
      </div>
    </main>
  );
}

export default App;
