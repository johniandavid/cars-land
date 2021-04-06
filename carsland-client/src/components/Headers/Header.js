import React, { useEffect } from 'react';
import { Button, Container, Row } from "reactstrap";
import Typist from "react-typist";


import './Header.css'

function Header(props) {

    let pageHeader = React.createRef();

    let cursor = {
        blink: true
    }

    function moveDown() {
        props.fullpage.moveSectionDown()
    }

    function moveTo(section) {
        props.fullpage.moveTo(section)
    }

  return (
    <>
        <Container>
            <Row className="header-container">
                <div className="text-center" >
                    <Typist className='h1' avgTypingDelay={100} cursor={cursor}> Buy Used Save More.</Typist>
                    <h4 className='text-white' >Order Online for Touchless Delivery</h4>
                    <br />
                    <Button className="btn-round" color="neutral" onClick={() => moveTo(3)} type="button" outline>
                        Shop
                    </Button>
                </div>
            </Row>
            <Row className="move-down-btn-container">
                <i className="nc-icon x2 nc-minimal-down move-down-btn" onClick={moveDown} />
            </Row>
        </Container>
    </>
  );
}

export default Header;
