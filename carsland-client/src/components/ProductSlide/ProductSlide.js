import addCarToCart from "../../actions/"

import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux";

import Slider from 'react-slick';
import {Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

import "./ProductSlide.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductSlide(props) {

    const dispatch = useDispatch()

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 3, slidesToScroll: 1 } } ]
    };

    let carCards = props.carsList.map(car => {
        return (
            <div className="slide-container">
                    <Card className="text-center">
                        <CardBody>
                            <div className="product-image">
                                <Link target="_blank" to={`/cars/${car.carid}`}>
                                    <CardImg top src={`images/${car.image}`}></CardImg>
                                </Link>
                                <div className="add-cart-btn overlay">
                                    <Button className="btn-black btn-round" onClick={() => dispatch(addCarToCart(car))}>Add to Cart</Button>
                                </div>
                            </div>
                            <div className="product-title">
                                <Link target="_blank" to={`/cars/${car.carid}`}>
                                    <CardTitle>{`${car.year} ${car.make} ${car.model}`}</CardTitle>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
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
export default ProductSlide;

