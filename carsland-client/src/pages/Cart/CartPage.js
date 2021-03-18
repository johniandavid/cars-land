import CartNavbar from "../../components/Navbars/CartNavBar/CartNavBar";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footers/Footer";
import { useSelector } from "react-redux";
import {Container, Row, Col} from "reactstrap";

import "./CartPage.css"

function CartPage(props) {
    const cars = useSelector(state => state.cart.cars)

    console.log(cars)

    return (
        <div className="cart-page">
            <CartNavbar />
            <Container>
                <Row lg="2">
                    <Col className="cart" md="8"lg="6">
                        <ProductList shoppingCart={cars} />
                    </Col>
                    <Col  md="4" lg="6">
                        <div>
                            <h4>Total</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default CartPage;