import { useState }from 'react'
import { Carousel } from "react-bootstrap"
function ImageCarousel(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = props.items.map((item) => {
        return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.src}
                />
              </Carousel.Item>
        )
    })

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images}
        </Carousel>
    );
}

export default ImageCarousel;