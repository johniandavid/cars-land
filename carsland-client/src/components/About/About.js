import {Col, Container, Row} from "react-grid-system";

function About() {
    return(
            <div className="about">
                <div className="slide">
                    <Container>
                        <Row>
                            <Col sm={12} md={9} lg={7} xl={9} className="text-left">
                                <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris et auctor dui. </h1>
                                <h4> Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris et auctor dui.  </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col sm={12} md={9} lg={7} xl={9} className="text-left">
                                <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris et auctor dui. </h1>
                                <h4> Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris et auctor dui. </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
}

export default About