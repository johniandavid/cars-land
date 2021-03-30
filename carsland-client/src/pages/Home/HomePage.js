import HomeNavbar from '../../components/Navbars/HomeNavBar/HomeNavbar';
import HeaderWithVideo from "../../components/Headers/HeaderWithVideo";
import Footer from "../../components/Footers/Footer";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import About from "../../components/About/About";

import {getCars} from "../../data/dataRequests";

import { useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Button} from "reactstrap";

import './HomePage.css';


function HomePage(props) {

    const [cars, setCars] = useState({0:[]});
    const [loading, setLoading] = useState(false);

    const cart = useSelector(state => state.cart.cars)
    const counter = useSelector(state => state.cart.counter)
    const history = useHistory();

    async function fetchData() {
        setLoading(true)
        const car =  await getCars({limit: 5});
        setCars(car)

        if(cars.length != 0) {
            setLoading(false)
        }
    }

    function handleOnClick(route) {
        history.push(`/${route}`)
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

                render={({ state, fullpageApi }) => {

                    return (
                            <ReactFullpage.Wrapper>
                                <div className="section" data-anchor="home">
                                    <HomeNavbar counter={counter} />
                                    <HeaderWithVideo fullpage={fullpageApi}/>
                                </div>
                                <div className="section text-center" data-anchor="about">
                                    <Container fluid={true}>
                                        <About />
                                    </Container>
                                </div>
                                <div className="section" data-anchor="shop">
                                    <Container fluid={true}>
                                        <div className="section-title">
                                             <h4>Shop</h4>
                                        </div>
                                        <ProductSlide carsList={cars} />
                                        <div className="view-more-btn-container">
                                            <Button className="btn-round view-more-btn" size="lg" onClick={() => handleOnClick('cars')}pill> View More</Button>
                                        </div>
                                    </Container>
                                     <Footer/>
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }
                }
            />
        )
}

export default HomePage;
