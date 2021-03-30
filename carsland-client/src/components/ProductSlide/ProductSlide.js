import { addCarToCart, deleteFromCart } from "../../actions/"


import Slider from 'react-slick';
import {Card, CardImg, CardBody, CardTitle, Button, Container, Row } from 'reactstrap';
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";

import "./ProductSlide.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ProductSlide(props) {

    const dispatch = useDispatch()

    const history = useHistory();

    function handleClick(route) {
        history.push(`/${route}`);
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1900,
        responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 3, slidesToScroll: 1 } } ]
    };

    let carCards = props.carsList[0].map(car => {
        return (
            <Row>
                <Card className="text-center">
                    <CardBody>
                        <div className="product-image">
                            <CardImg top src={`images/${car.image}`} onClick={() => handleClick(`cars/${car.carid}`)}></CardImg>
                            <div className="add-cart-btn center">
                                <Button className="btn-black btn-round"  onClick={() => dispatch(addCarToCart(car))}>Add to Cart</Button>
                            </div>
                        </div>
                        <div className="product-title">
                            <div  onClick={() => handleClick(`cars/${car.carid}`)}>
                                <CardTitle>{`${car.year} ${car.make} ${car.model}`}</CardTitle>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Row>
            )
    });

    return (
        <Slider{...settings}>
            {carCards}
        </Slider>
    );
}
export default ProductSlide;

