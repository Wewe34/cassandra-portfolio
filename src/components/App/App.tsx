import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App h-screen bg-white">
       <AboutMe />
       <Skills />
       <Resume />
    </div>
  );
}

export default App;
