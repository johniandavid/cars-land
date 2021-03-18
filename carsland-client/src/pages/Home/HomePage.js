import HomeNavbar from '../../components/Navbars/HomeNavBar/HomeNavbar';
import HeaderWithVideo from "../../components/Headers/HeaderWithVideo";
import Footer from "../../components/Footers/Footer";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import About from "../../components/About/About";

import {getAllCars} from "../../data/dataRequests";

import React, {useEffect, useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


import './HomePage.css';


function HomePage() {

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
                                    <About />
                                </div>
                                <div className="section" data-anchor="shop">
                                    <ProductSlide carsList={cars}/>
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
