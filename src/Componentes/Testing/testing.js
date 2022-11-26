import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Rick from "../Imagenes/rick-morty-1.png"
import "./testing.css"

function CarouselFadeExample() {
  return (
    <div className="hola">
    <Carousel fade>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as01.epimg.net/meristation/imagenes/2022/07/28/noticias/1659024547_932078_1659024590_noticia_normal.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Season 6</h3>
          <p>Coming next</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.looper.com/img/gallery/what-the-mistakes-in-rick-morty-could-really-mean/l-intro-1617842307.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Season 7</h3>
          <p>Coming next</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.nme.com/wp-content/uploads/2022/10/Rick_And_Morty_JuRicksic_Mort.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Season 6</h3>
          <p>Rick</p>
        </Carousel.Caption>
      </Carousel.Item>

    <Carousel.Item>
        <img id="hola"
          className="d-block w-100"
          src="https://www.sird.eu/wp-content/uploads/2022/09/Rick-Morty-Saison-6-prouve-que-lhistoire-principale-nest.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Season 6</h3>
          <p>Coming next</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;