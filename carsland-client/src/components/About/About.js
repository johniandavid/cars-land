import {Col, Container, Row} from "react-grid-system";
import "./About.css"

function About() {
    return(
            <div className="about">
                <div className="slide">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={8} xl={8} className="text-left">
                                <h1>Our cars are certified used from top brands around the world</h1>
                                <h4> We carefully select cars with a detailed history just for you </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
}

export default About