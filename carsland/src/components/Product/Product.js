import {useEffect, useState} from "react";
import {getCar} from "../../data/data";
import { Container, Row, Col } from 'react-grid-system';

import './Product.css';

function Product(props) {
    const [cars, setCars] = useState([]);

    async function fetchData() {
        const car = await getCar(props.id);
        setCars(car);
        console.log(car);
    }

    useEffect(() => {
        fetchData();
    },[]);

    /*
    let car = cars.map(car => {
        return (
        )
    })

*/
    return (
        <Container>
            <Row>

            </Row>
        </Container>
    )
}

export default Product;