import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
      <div className="carousel">
        <h3>Galeria de Fotos</h3>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image5.jpg'} alt="Icone da página" /> 
            <Carousel.Caption>
              
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image6.jpg'} alt="Icone da página" /> 
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image9.jpg'} alt="Icone da página" /> 
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
