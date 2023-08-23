import './App.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';
import { Galery } from './components/Galery';
import { Icons } from './components/Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowModal(true);
  };


  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
      <Galery />
      <Icons />
      <div className="contato">
        <div className="box-social-media">
          <h4>Fale Conosco</h4>
          <span>(11)1234-5678</span>
          <span>contato@alohasurf.com.br</span>
          <div className="box-icons">
            <img src={process.env.PUBLIC_URL + '/icons/facebook.png'} alt="Icone do Facebook" width={'30px'} /> 
            <img src={process.env.PUBLIC_URL + '/icons/instagram.png'} alt="Icone do Instagram" width={'30px'} /> 
            <img src={process.env.PUBLIC_URL + '/icons/twitter.png'} alt="Icone do Twitter" width={'30px'} /> 
          </div>
        </div>
        <div className="box-form-contact">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder='Digite seu Nome'  required />
            </div>
            <div>
              <input type="email" placeholder='Digite seu E-mail' required />
            </div>
            <div>
              <input type="telefone" placeholder='Digite seu Telefone'  required />
            </div>
            <div>
              <textarea placeholder='Digite sua Mensagem' required />
            </div>
            <button type="submit">Enviar</button>
          </form>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Obrigado!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Sua mensagem foi enviada com sucesso!</p>
              <p>Em breve entraremos em contato</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>  
      </div>      
    </div>
  );
}

export default App;
