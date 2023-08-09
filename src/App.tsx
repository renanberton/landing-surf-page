import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
    </div>
  );
}

export default App;
