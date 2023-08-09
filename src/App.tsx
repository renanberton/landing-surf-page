import React from 'react';
import './App.scss';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='banner' style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/banner.jpg'})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'}}>
          <h1>APRENDA A SURFAR CONOSCO</h1>
          <a href="/">Quero aprender</a>
      </div>
    </div>
  );
}

export default App;
