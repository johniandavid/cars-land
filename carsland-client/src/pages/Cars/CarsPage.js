import CarsNavBar from "../../components/Navbars/CarsNavBar/CarsNavBar"
import CarPagination from "../../components/CarPagination/CarPagination";
import CarsList from "../../components/CarsList/CarsList";
import Footer from "../../components/Footers/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import {getCars, getFilteredCars} from "../../data/dataRequests";

import {Container, Row, Col, Button} from "reactstrap"
import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import Spinner from 'react-bootstrap/Spinner'

import "./CarsPage.css"

function CarsPage() {
    const cart = useSelector(state => state.cart.cars)
    const counter = useSelector(state => state.cart.counter)

    const [pages, setPages] = useState({0:[]})
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        const params = {
            limit : 6
        }
        setLoading(true)
        const data = await getCars(params)
        setPages(data)
        setLoading(false)
    }

    function handleOnClick(page) {
        setCurrentPage(page)
    }

    function handlePages(page){
        setPages(page)
    }

    useEffect( () => {
        fetchData()
    },[])

    return(
        <>
            <CarsNavBar counter={counter}/>
            <div className="cars-page">
                <SideMenu handleSetLoading={setLoading} handleSetPages={handlePages}/>
                <Container>
                    {!loading ? <Row className="listings-container"><CarsList page={pages} current={currentPage} /></Row> : <Row className="listings-container spinner"><Spinner animation="border" variant="primary" /></Row>}
                </Container>
                <div className="cars-pagination">
                    {Object.values(pages).length > 1 && !loading ? <CarPagination pageNums={Object.values(pages).length} handlePage={handleOnClick}/> : <></>}
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default CarsPage;

