import ProductNavbar from '../../components/Navbars/ProductNavBar/ProductNavbar';
//import Product from "../../components/Product/Product";
import Footer from "../../components/Footers/Footer";

import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './ProductPage.css';
import {getCar} from "../../data/dataRequests";

function ProductPage(props) {

    const [cars, setCars] = useState([]);

    async function fetchData(id) {
        const data = await getCar(id);
        setCars(data);
        console.log(data);
    }
    useEffect(() => {
        const path = window.location.pathname.split('/');
        fetchData(path[2]);
    },[]);

    return (
        <div className="product-page">
            <ProductNavbar/>
            <Container>

            </Container>
            <Footer/>
        </div>
    )
}

export default ProductPage;




