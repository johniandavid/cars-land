import {addCarToCart, deleteFromCart } from '../../actions';
import {Button, Card, CardBody, CardImg, Container, Col, Row} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux'

import "./ProductList.css"

function ProductList(props) {

    const cart = useSelector(state => state.cart.cars)
    const dispatch = useDispatch()

    let productCards = cart.map((product,index) => {
        const cartid = index + 1
        return (
                    <Card className="cart-card">
                        <Container>
                            <Row>
                                <Col xs={2} sm={2} lg={2}>
                                    <div className="thumbnail">
                                        <CardImg src={`images/${product.image}`}></CardImg>
                                        <div className="middle">
                                            <Button className="btn-round" size="sm" color="danger" onClick={() => dispatch(deleteFromCart(cartid-1))}>Delete</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={8} sm={8} lg={8} className="product-details">
                                    <div className="product-title">
                                        <h6>{`${product.year} ${product.make} ${product.model}`}</h6>
                                    </div>
                                </Col>
                                <Col xs={2} sm={2} lg={2} className="product-details">
                                    <div className="product-price">
                                        <h6>${product.price}</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                );
        });

    return(
        <div>
            {productCards}
        </div>
    )
}

export default ProductList;