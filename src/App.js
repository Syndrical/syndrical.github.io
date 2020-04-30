import React from 'react';
import About from './components/About';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Introduction />
      <Experience />
    </div>
  );
}
