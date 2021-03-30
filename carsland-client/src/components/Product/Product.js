import { addCarToCart, deleteFromCart } from "../../actions"

import {Col, Container, Row} from "react-grid-system";
import {Button} from 'reactstrap';
import {useDispatch} from "react-redux";

import "./Product.css"

function Product(props) {

    const dispatch = useDispatch()

    const formated_car = {
            carid : props.car.carid,
            modelid : props.car.modelid,
            year : props.car.year,
            make : props.car.make,
            model : props.car.model,
            price : props.car.price,
            milage : props.car.mileage,
            color : props.car.color,
            image : props.car.image,
    }

    return(
            <div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col  sm={12} md={12} lg={8} xl={8} className="text-left">
                                <h1>{`${props.car.year} ${props.car.make} ${props.car.model}`}</h1>
                                <h3>{`Price: $ ${props.car.price} | Mileage: ${props.car.mileage}`}</h3>
                                <div className="add-to-cart-btn-container">
                                    <Button size="lg" className="btn-round add-to-cart-btn" onClick={() => dispatch(addCarToCart(formated_car))}pill>Add to Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
}

export default Product

/**
   <div className="slide">
                    <Container>
                        <h4>Specifications</h4>
                        <Row>
                            <div className="text-center">
                                <h4>{props.car.specification}</h4>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <h4>Features</h4>
                        <Row>
                            <div className="text-center">
                                <h4>{props.car.feature}</h4>
                            </div>
                        </Row>
                    </Container>
                </div>
 */