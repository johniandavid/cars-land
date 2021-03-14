import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import {getCar} from "../../data/data";

import './product.css';


import HomeNavbar from '../../components/Navbars/HomeNavbar';
import Footer from "../../components/Footers/Footer";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import ProductNavbar from '../../components/Navbars/ProductNavbar';
import Product from "../../components/Product/Product";

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




