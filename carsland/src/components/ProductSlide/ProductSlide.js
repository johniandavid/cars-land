import React, {useEffect, useState} from 'react';
import "./ProductSlide.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import {Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import {getAllCars} from "../../data/data";


function ProductSlide() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 3, slidesToScroll: 1 } } ]
    };

    const [cars, setCars] = useState([]);

    async function fetchData() {
        const car =  await getAllCars();
        setCars(car);
    }

    useEffect(() => {
        fetchData()
    }, []);

    let carCards = cars.map(car => {
        return (
            <div className="slide-container">
                <a href={`/cars/${car.carid}`}>
                    <Card className="text-center">
                        <CardBody>
                            <CardImg top src={`img/cars/${car.image}`}></CardImg>
                            <CardTitle>{`${car.year} ${car.make} ${car.model}`}</CardTitle>
                        </CardBody>
                    </Card>
                </a>
            </div>
        )
    });

    return (
        <div>
            <Slider{...settings}>
                {carCards}
            </Slider>
        </div>
    );
}

export default ProductSlide