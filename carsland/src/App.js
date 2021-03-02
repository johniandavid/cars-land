import React, { useState, useEffect } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import ReactFullpage from '@fullpage/react-fullpage';

import {Card, CardImg, CardBody, CardTitle, CardText, Container, Button} from 'reactstrap';

import HomeNavbar from './components/Navbars/HomeNavbar';
import HeaderWithVideo from "./components/Headers/HeaderWithVideo";


import { getAllCars } from './data/data.js';


function App() {

    const [cars, setCars] = useState([])

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 1000,
        responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 3, slidesToScroll: 1 } } ]
    };

    async function fetchData() {
        const car =  await getAllCars();
        setCars(car)
    }

    useEffect(() => {
        fetchData()
    }, []);


    let carCards = cars.map(car => {
        return (
            <div>
                <Card className="text-center" style={{width: '22rem'}}>
                    <CardBody>
                        <CardImg top src={`img/cars/${car.image}`}></CardImg>
                        <CardTitle>{`${car.year} ${car.make} ${car.model}`}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    })


  return (
      <ReactFullpage
          scrollingSpeed = {700}
          navigation={false}
          controlArrows={false}
          keyboardScrolling={true}
          slidesNavigation={true}
          slidesNavPosition={'bottom'}
          navigationPosition={'left'}
          scrollOverflow={false}
          scrollBar={false}
          scrollingSpeed={600}
          sectionsColor={["#ffffff", "#ffffff", "ffffff", "f4f4f4"]}
          lazyLoading={true}

          render={({ state, fullpageApi }) => {
              return (
                  <ReactFullpage.Wrapper>
                      <div className="section">
                          <HomeNavbar/>
                          <HeaderWithVideo fullpage={fullpageApi}/>
                      </div>
                      <div className="about-us section text-center text-black-50">
                          <Container>
                              <div className="slide">
                                <h2>Affordable</h2>
                              </div>
                              <div className="slide">
                                  <h2>Certified Used</h2>
                              </div>
                              <div className="slide">
                                  <h2>Awesome</h2>
                              </div>
                          </Container>
                      </div>
                      <div className="section">
                          <h3 className="text-center text-black-50">Shop</h3>
                            <Container>
                                <Slider{...settings}>
                                    {carCards}
                                </Slider>
                            </Container>
                      </div>
                      <div className="footer section">
                          <Container>
                          </Container>
                      </div>
                  </ReactFullpage.Wrapper>
              );
          }}
      />

  );
}

export default App;
