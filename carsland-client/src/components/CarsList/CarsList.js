import {Button, Card, CardBody, CardImg, CardTitle, Col} from "reactstrap";
import {addCarToCart} from "../../actions";
import {useDispatch} from "react-redux";

import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

function CarsList(props) {

    const dispatch = useDispatch()

    const history = useHistory();

    function handleClick(route) {
        history.push(`/${route}`);
    }

    let cards = props.page[props.current].map((car) => {
        console.log(props.page)
        return (
                <Col sm="12" md="6" lg="4">
                     <Card className="text-center">
                        <CardBody>
                            <div className="product-image">
                                <CardImg top src={`images/${car.image}`} onClick={() => handleClick(`cars/${car.carid}`)}></CardImg>
                                <div className="add-cart-btn center">
                                    <Button className="btn-black btn-round" size="md" onClick={() => dispatch(addCarToCart(car))}>Add to Cart</Button>
                                </div>
                            </div>
                            <div className="product-title">
                                <div  onClick={() => handleClick(`cars/${car.carid}`)}>
                                    <CardTitle>{`${car.year} ${car.make} ${car.model}`}</CardTitle>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )
        })

    return(
        <>
            {cards}
        </>
    )

}

export default CarsList;