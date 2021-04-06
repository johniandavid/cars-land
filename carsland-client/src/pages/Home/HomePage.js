import HomeNavbar from '../../components/Navbars/HomeNavBar/HomeNavbar';
import Header from "../../components/Headers/Header";
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
                sectionsColor={["#c2c2c2", "#ffffff", "#ffffff"]}

                render={({ state, fullpageApi }) => {

                    return (
                            <ReactFullpage.Wrapper>
                                <div className="section header-img" data-anchor="home">
                                    <HomeNavbar counter={counter} />
                                    <Header fullpage={fullpageApi}/>
                                </div>
                                <div className="section text-center" data-anchor="about">
                                    <Container fluid={true}>
                                        <About />
                                    </Container>
                                </div>
                                <div className="section" data-anchor="shop">
                                    <Container fluid={true}>
                                        <Row className="section-title">
                                             <h3>Shop</h3>
                                        </Row>
                                        <ProductSlide carsList={cars} />
                                        <Row className="view-more-btn-container">
                                            <Button className="btn-round view-more-btn" size="lg" onClick={() => handleOnClick('cars')}pill> View More</Button>
                                        </Row>
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
