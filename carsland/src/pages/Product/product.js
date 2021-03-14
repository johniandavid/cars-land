import HomeNavbar from '../../components/Navbars/HomeNavbar';
import Footer from "../../components/Footers/Footer";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import ProductNavbar from '../../components/Navbars/ProductNavbar';
import Product from "../../components/Product/Product";

import {getCar} from "../../data/data";

import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import './product.css';

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




