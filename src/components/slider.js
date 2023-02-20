import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

let Slider = () => {
    return (
        <Carousel>
        <CarouselItem style={{ height : '600px',}}>
            <img 
            // src="https://www.rabstol.net/uploads/gallery/main/410/rabstol_net_river_38.jpg"
            src="https://morgoth.ru/images/2022/07/29/9054096c6bdae8c6f701f87bb1cfceb8.jpg"
            className=""
            alt="pic"
            width={1800}

            />
            <Carousel.Caption>
                <h3> Web dew blog</h3>
                <p>Cillum non qui Lorem minim esse commodo ipsum. </p>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ height : '600px',}}>
            <img 
            src="http://35photo.ru/photos_main/435/2175826.jpg"
            className=""
            alt="pic"
            width={1800}
            />
            <Carousel.Caption>
                <h3> Web dew blog</h3>
                <p>Cillum non qui Lorem minim esse commodo ipsum. </p>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ height : '600px',}}>
            <img 
            src="https://photobazaar.ru/system/photos/thumbnails/000/014/432/compressed/406051ff2baf34e024269b67ba2adba7.jpg?1472041484"
            className=""
            alt="pic"
            width={1800}
            />
            <Carousel.Caption>
                <h3> Web dew blog</h3>
                <p>Cillum non qui Lorem minim esse commodo ipsum. </p>
            </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    )


};

export default Slider;
