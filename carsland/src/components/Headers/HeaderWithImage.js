import React, { useState, useEffect } from 'react';
import './HeaderWithImage.css'
import { Button, Container } from "reactstrap";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


function HeaderWithImage(props) {
    let pageHeader = React.createRef();
    let cursor = {
        blink: true
    }

    function moveDown() {
        props.fullpage.moveSectionDown()
    }

    useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                className="page-header cover"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <Typist className='h1' avgTypingDelay={100} cursor={cursor}> Buy Used Save More.</Typist>
                        <h4>Order Online for Touchless Delivery</h4>
                        <br />
                        <Button className="btn-round" color="neutral" type="button" outline>
                            Shop
                        </Button>
                        <div className="moveSectionDownButton hoverButtonStyle">
                            <i className="nc-icon x2 nc-minimal-down " onClick={moveDown} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HeaderWithImage;