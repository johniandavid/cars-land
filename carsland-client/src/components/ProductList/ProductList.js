import {Button, Card, CardBody, CardImg, Container, Col, Row} from "reactstrap";
import "./ProductList.css"

function ProductList(props) {

     let productCards = props.shoppingCart.map(product => {
       return (
                <div>
                    <Card className="text-center">
                        <Container fluid="md">
                            <Row xs="2">
                                <Col>
                                    <div className="thumbnail">
                                        <CardImg src={`images/${product.image}`}></CardImg>
                                        <div className="middle">
                                            <Button className="btn-round" size="sm" color="danger">Delete</Button>
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
                        </Container>
                    </Card>
                </div>
            );
    });

    return(
        <div>
            {productCards}
        </div>
    )
}

export default ProductList;