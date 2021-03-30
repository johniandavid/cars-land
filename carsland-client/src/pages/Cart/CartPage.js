import CartNavbar from "../../components/Navbars/CartNavBar/CartNavBar";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footers/Footer";

import {Container, Row, Col, Button} from "reactstrap";
import {useSelector} from "react-redux";
import "./CartPage.css"

function CartPage(props) {

    const cart = useSelector(state => state.cart.cars)
    const counter = useSelector(state => state.cart.counter)

    function getCartTotal(cart) {
        let total = 0
        cart.forEach((car) => {
            total += parseInt(car["price"])
        })
        return total
    }

    return (
        <div className="cart-page">
            <CartNavbar />
            <Container>
                <Row lg="2">
                    <Col md="8"lg="6">
                        <Container className="cart">
                            { counter ? <ProductList /> : <div className="text-middle"><h6>Your Cart is Empty</h6></div>}
                        </Container>
                    </Col>
                    <Col className="total" md="4" lg="6">
                        <div className="text-center price-title">
                            <h4>Total</h4>
                        </div>
                         <Container>
                            <Row className="text-center">
                                <Col xs="6" g="6">
                                    <h5>Price:</h5>
                                </Col>
                                <Col xs="6"lg="6">
                                    <h5>$ {getCartTotal(cart)}</h5>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="order-btn text-center">
                            <Button className="btn-black btn-round">Checkout</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default CartPage;
