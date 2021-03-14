import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import {getCar} from "../../Data/data";

import './product.css';


import HomeNavbar from '../../Components/Navbars/HomeNavbar';
import Footer from "../../Components/Footers/Footer";
import ProductSlide from "../../Components/ProductSlide/ProductSlide";
import ProductNavbar from '../../Components/Navbars/ProductNavbar';
import Product from "../../Components/Product/Product";

function ProductPage() {

    let {id} = useParams();

    return (
        <div className="product-page">
            <ProductNavbar/>
            <Container>
                <Product id={id}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default ProductPage;




