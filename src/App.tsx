import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="intro">
        <div className='intro-text'>
          <h2>Descubra a emoção do Surf conosco!</h2>
          <p>Aprenda a surfar com nossa equipe preparada e experiente, contamos com instrutores dedicados e equipamentos de 
            qualidade que garantem uma experiência segura e divertida. <br/><br/>
          Conecte-se com a natureza, sinta a energia das ondas e experimente a liberdade de deslizar sobre elas. <br/><br/>
          Temos aulas personalizadas para iniciantes e surfistas experientes, localizada na praia do Guarujá - Taguaíba, 
          nossas aulas proporcionam acesso a ondas perfeitas para o aprendizado.</p>
        </div>
        <div className="intro-image">
          <img src={process.env.PUBLIC_URL + '/imgs/image3.jpg'} alt="Icone da página" /> 
        </div>
      </div>
    </div>
  );
}

export default App;
