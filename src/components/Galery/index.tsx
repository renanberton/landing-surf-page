import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

export function Galery() {
   return (
      <div className="carousel">
        <h3>Galeria de Fotos</h3>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image5.jpg'} alt="Foto 1 do Slide" /> 
            <Carousel.Caption>              
              <p>Capturando a energia das ondas e a liberdade do mar.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image6.jpg'} alt="Foto 2 do Slide" /> 
            <Carousel.Caption>
              <p>Equilíbrio entre desafio e conexão com a natureza.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/imgs/image9.jpg'} alt="Foto 3 do Slide" /> 
            <Carousel.Caption>
              <p> Deslize na harmonia das águas e descubra sua paixão pelo surf.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
   )
}