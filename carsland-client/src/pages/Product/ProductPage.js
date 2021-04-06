import {getCar} from "../../data/dataRequests";
import ProductNavbar from '../../components/Navbars/ProductNavBar/ProductNavbar';
import Product from "../../components/Product/Product";

import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'react-grid-system';
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import './ProductPage.css';
import ReactFullpage from "@fullpage/react-fullpage";

function ProductPage(props) {

    let { id } = useParams();
    const [cars, setCars] = useState({});

    const cart = useSelector(state => state.cart.cars)
    const counter = useSelector(state => state.cart.counter)

    async function fetchData(id) {
        const data = await getCar(id);
        setCars(data[0]);
    }
    useEffect(() => {
        fetchData(id)
    },[]);

    return (
            <ReactFullpage
                navigation={false}
                scrollBar={false}
                keyboardScrolling={true}
                continuousHorizontal={true}
                slidesNavigation={true}
                scrollOverflow={true}
                scrollingSpeed={600}
                controlArrows={false}
                autoScrolling={true}
                sectionsColor={["#ffffff", "#ffffff", "#ffffff"]}
                lazyLoading={true}

                render={({ state, fullpageApi }) => {

                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <ProductNavbar counter={counter}/>
                                <Container>
                                    <Row className="car-img-container">
                                        <Col>
                                            <div className="car-img">
                                                <img className="main" src={`../images/${cars.image}`}></img>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="details-btn-container">
                                            <div className="text-center">
                                                <span>Details</span>
                                                <div className="details-btn">
                                                    <i className="nc-icon x2 nc-minimal-down" onClick={() => fullpageApi.moveSectionDown()} />
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                            <div className="section text-center">
                                <Product car={cars} />
                            </div>
                        </ReactFullpage.Wrapper>
                        )
                    }
                }
            />
        )
}

export default ProductPage;




