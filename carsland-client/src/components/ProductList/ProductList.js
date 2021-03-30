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
                    <Card className="cart-card text-center">
                        <Row xs="2">
                            <Col>
                                <div className="thumbnail">
                                    <CardImg src={`images/${product.image}`}></CardImg>
                                    <div className="middle">
                                        <Button className="btn-round" size="sm" color="danger" onClick={() => dispatch(deleteFromCart(cartid-1))}>Delete</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <a href={product.url} target="_blank">
                                    <div className="product-title">
                                        <h6 >{`${product.year} ${product.make} ${product.model}`}</h6>
                                    </div>
                                    <div className="product-price">
                                        <CardBody>${product.price}</CardBody>
                                    </div>
                                </a>
                            </Col>
                        </Row>
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