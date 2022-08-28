import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App bg-pink-300">
      <AboutMe />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
