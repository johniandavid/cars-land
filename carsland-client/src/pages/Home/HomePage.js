import HomeNavbar from '../../components/Navbars/HomeNavBar/HomeNavbar';
import HeaderWithVideo from "../../components/Headers/HeaderWithVideo";
import Footer from "../../components/Footers/Footer";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import About from "../../components/About/About";

import {getAllCars} from "../../data/dataRequests";

import { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col} from "reactstrap";


import './HomePage.css';


function HomePage() {

    const cart = useSelector(state => state.cart.cars)
    const count = useSelector(state => state.cart.counter)

    const [cars, setCars] = useState([]);

    async function fetchData() {
        const car =  await getAllCars();
        setCars(car);
    }
    useEffect(() => {
        fetchData()
    }, []);


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
                controlArrows={false}
                sectionsColor={["#ffffff", "#ffffff", "#ffffff"]}
                lazyLoading={true}

                render={({ state, fullpageApi }) => {

                    return (
                            <ReactFullpage.Wrapper>
                                <div className="section" data-anchor="home">
                                    <HomeNavbar counter={count} />
                                    <HeaderWithVideo fullpage={fullpageApi}/>
                                </div>
                                <div className="section text-center" data-anchor="about">
                                    <Container fluid={true}>
                                        <About />
                                    </Container>
                                </div>
                                <div className="section" data-anchor="shop">
                                    <Container fluid={true}>
                                        <div className="shop-title">
                                            <h3>Shop</h3>
                                        </div>
                                        <ProductSlide carsList={cars}/>
                                        <Footer/>
                                    </Container>
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }
                }
            />
        )
}

export default HomePage;
