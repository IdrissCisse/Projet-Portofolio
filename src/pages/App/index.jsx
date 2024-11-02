import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Home from '../../components/Home';
import About from '../../components/About';
import Projets from '../../components/Projets';
import Contact from '../../components/Contact';
import Spacer from '../../components/Spacer';

function App() {
  return (
    <main>
      <Header />
      <Spacer size="7rem" />
      <div id="home">
        <Home />
      </div>
      <Spacer size="11rem" />
      <div id="about">
        <About />
      </div>
      <Spacer size="15rem" />
      <div id="projects">
        <Projets />
      </div>
      <Spacer size="15rem" />
      <div id="contact">
        <Contact />
      </div>
      <Spacer size="2rem" />
    </main>
  );
}

export default App;
