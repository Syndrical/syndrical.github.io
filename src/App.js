import React from 'react';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import './App.css';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app">
      <Introduction />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
