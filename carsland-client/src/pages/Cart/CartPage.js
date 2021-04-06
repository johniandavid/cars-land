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
                <Row lg={2}>
                    <Col md={8} lg={6}>
                        <Container className="cart">
                            { counter ? <ProductList /> : <div className="text-middle"><h6>Your Cart is Empty</h6></div>}
                        </Container>
                    </Col>
                    <Col className="total-container">
                        <Row className="align-center">
                            <h4>Total</h4>
                        </Row>
                        <Row className="total-container-margin">
                            <Col className="align-center">
                                <h5>Total:</h5>
                            </Col>
                            <Col className="align-center">
                                <h5>$ {getCartTotal(cart)}</h5>
                            </Col>
                        </Row>
                        <Row className="total-container-margin align-center">
                            <Button className="btn-black btn-round">Checkout</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartPage;
