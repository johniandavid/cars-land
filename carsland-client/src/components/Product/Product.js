import addCarToCart from "../../actions";

import {Col, Container, Row} from "react-grid-system";
import {Button, UncontrolledCarousel} from 'reactstrap';
import {useDispatch} from "react-redux";
import ImageCarousel from "../Carousel/Carousel";

import "./Product.css"

function Product(props) {
    const dispatch = useDispatch();

    const carouselitem = [
        {
            src :`images/${props.car.image}`
        },
        {
             src :`images/${props.car.image1}`
        },
        {
             src :`images/${props.car.image2}`
        }
    ]
    return(
            <div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col  sm={12} md={12} lg={8} xl={8} className="text-left">
                                <h1>{`${props.car.year} ${props.car.make} ${props.car.model}`}</h1>
                                <h3>{`Price: $ ${props.car.price} | Mileage: ${props.car.mileage}`}</h3>
                                <div className="add-to-cart-btn">
                                    <Button size="lg" className="btn-round" onClick={() => dispatch(addCarToCart(props.car))} pill>Add to Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <h4>Specifications</h4>
                        <Row>
                            <div className="specification">
                                <h2>{props.car.specification}</h2>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <h4>Features</h4>
                        <Row>
                            <div className="specification">
                                <h2>{props.car.feature}</h2>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
}

export default Product