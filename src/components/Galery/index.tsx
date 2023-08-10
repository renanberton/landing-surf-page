import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

export function Galery() {
   return (
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
   )
}