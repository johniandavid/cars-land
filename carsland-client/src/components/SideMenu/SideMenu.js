import {getFilteredCars} from "../../data/dataRequests";

import {
    FormGroup,
    Label,
    Input,
    Container
} from "reactstrap";
import Slider from '@material-ui/core/Slider';
import {Button} from "reactstrap";
import {useState} from "react";

import "./SideMenu.css"

function SideMenu(props) {

    const colorOptions = ["None","Red","Black","Gray","Navy Blue","White"]
    const makeOptions = ["None","Nissan","Bmw","Mazda","Honda","Jeep","Hyundai","Volvo","Toyota","Acura","Chevrolet","Dodge","Ford"]

    const [ color, setColor ] = useState("")
    const [ make, setMake ] = useState("")
    const [ year, setYear ] = useState("")
    const [ model, setModel ] = useState("")

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100)

    const [minMileage, setMinMileage] = useState(0)
    const [maxMileage, setMaxMileage] = useState(150)


   function openMenu(width) {
        document.getElementById("query-input").style.display = "block";
        document.getElementById("mySidenav").style.width = `${width}`;
    }
    function closeMenu() {
        document.getElementById("query-input").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
    }

    function handleInputColorSelector(e) {
        setColor(e.target.value)
    }

    function handleMakeSelector(e) {
        setMake(e.target.value)
    }

    function handleModelInput(e) {
        setModel(e.target.value.trim())
    }

    function handleInputYear(e) {
        setYear(e.target.value.trim())
    }

    function handlePriceInput(event,newValue) {
        setMinPrice(newValue[0])
        setMaxPrice(newValue[1])
    }

    function handleMileageInput(event,newValue) {
        setMinMileage(newValue[0])
        setMaxMileage(newValue[1])
    }

    async function handleOnClickSearch(){
        const params = {
            limit : 6,
            year : year != "" ? year: undefined,
            make : make != "None" && make != "" ? make: undefined,
            model : model != "" ? model: undefined,
            color : color != "None" && color != "" ? color : undefined,
            minPrice : minPrice * 1000,
            maxPrice : maxPrice * 1000,
        }
        console.log(params)
        props.handleSetLoading(true)
        const data = await getFilteredCars(params)
        props.handleSetPages(data)
        props.handleSetLoading(false)
    }

    let colors = colorOptions.map((color) => {
        return (<option>{color}</option>)
    })

    let makes = makeOptions.map((make) => {
        return (<option>{make}</option>)
    })


   const priceMarks = [
          {
            value: 0,
            label: '0 K',
          },
          {
            value: 50,
            label: '50K',
          },
          {
            value: 100,
            label: '100K',
          }
    ];

    const mileageMarks = [
          {
            value: 0,
            label: '0 K',
          },
          {
            value: 75,
            label: '75K',
          },
          {
            value: 150,
            label: '150K',
          }
    ];

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <div id="query-input">
                    <div className="close-btn">
                        <i className="nc-icon lg nc-simple-remove" onClick={closeMenu}></i>
                    </div>
                    <Container>
                        <FormGroup className="inputs">
                            <Label for="makeSelect">Select Make:</Label>
                            <Input type="select" name="select" id="makeSelect" onChange={handleMakeSelector}>
                                {makes}
                            </Input>

                            <Label for="modelText">Select Model:</Label>
                            <Input type="text" name="model" id="modelText" onChange={handleModelInput}></Input>

                            <Label for="yearText">Select Year:</Label>
                            <Input type="text" name="year" id="yearText" onChange={handleInputYear}></Input>

                            <Label for="colorSelect">Select Color:</Label>
                            <Input type="select" name="select" id="colorSelect" onChange={handleInputColorSelector}>
                                {colors}
                            </Input>
                            <Label for="priceSlider">Select Price Range:</Label>
                            <Container>
                                <Slider
                                    value={[minPrice,maxPrice]}
                                    onChange={handlePriceInput}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    marks={priceMarks}
                                    step={10}
                                    min={0}
                                    max={100}
                                />
                            </Container>
                            <Label for="mileageSlider">Select Mileage Range:</Label>
                            <Container>
                                <Slider
                                    value={[minMileage,maxMileage]}
                                    onChange={handleMileageInput}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    marks={mileageMarks}
                                    step={5}
                                    min={0}
                                    max={150}
                                />
                            </Container>
                        </FormGroup>
                        <div className="search-btn-container">
                            <Button className="search-btn btn-round" onClick={handleOnClickSearch}>Apply Filters</Button>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="open-btn-container">
                 <Button className="open-btn" onClick={() => openMenu('250px')} ><i className="nc-icon lg nc-zoom-split"></i></Button>
            </div>
        </>
    )

}
export default SideMenu;