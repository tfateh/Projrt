import { Carousel } from 'react-bootstrap';
import React from 'react'
import"./Carousels.css";
 const Carousels = () => {
  return (
   <div>
    <Carousel>
    <Carousel.Item >
      <img className="d-block w-100" src="./imageimmo.png" alt="First slide" />
      <Carousel.Caption>
        <h3>Villa</h3>
        <p>Location Estival</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="./imm01.png" alt="Second slide" />

      <Carousel.Caption>
        <h3>Villa de Maitre</h3>
        <p>Bon Affaire Vente</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="./imm3.jpg" alt="Third slide" />

      <Carousel.Caption>
        <h3>PenthHouse</h3>
        <p>
          Supper Prix Location Annuel
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
};
export default Carousels;