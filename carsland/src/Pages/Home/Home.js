import React from 'react';

import './Home.css';

import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col } from 'react-grid-system';

import HomeNavbar from '../../Components/Navbars/HomeNavbar';
import HeaderWithVideo from "../../Components/Headers/HeaderWithVideo";
import Footer from "../../Components/Footers/Footer";
import ProductSlide from "../../Components/ProductSlide/ProductSlide";


function Home() {

    return (
            <ReactFullpage
        anchors={['home', 'about', 'shop','footer']}
        navigation={false}
        scrollBar={false}
        keyboardScrolling={true}
        continuousHorizontal={true}
        slidesNavigation={true}
        scrollOverflow={true}
        scrollingSpeed={600}
        sectionsColor={["#000000", "#ffffff", "#ffffff"]}
        lazyLoading={true}

        render={({ state, fullpageApi }) => {

            return (
                    <ReactFullpage.Wrapper>
                        <div className="section" data-anchor="home">
                            <HomeNavbar/>
                            <HeaderWithVideo fullpage={fullpageApi}/>
                        </div>
                        <div className="section text-center" data-anchor="about">
                            <div className="slide">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={9} lg={7} xl={6} className="text-left">
                                            <h1>Software Engineer & Mobile App Developer based in LA</h1>
                                            <h4>Dedicated to creating innovative solutions that can positively impact the lives of others. </h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="slide">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={9} lg={7} xl={6} className="text-left">
                                            <h1>I’m a creative, results-driven software engineer who can build state-of-the-art and user-friendly applications</h1>
                                            <h4> I aspire to use my passion for technology as a driving force to tackle everyday social issues.</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="section" data-anchor="shop">
                            <ProductSlide/>
                            <Footer/>
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default Home;
