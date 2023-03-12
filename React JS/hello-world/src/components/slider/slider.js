// Note: ImageSlider Component...!

import React, { Fragment, useEffect, useState } from 'react';
import Img1 from "../../images/cartoon_1.jpg";
import Img2 from "../../images/cartoon_2.jpg";
import Img3 from "../../images/cartoon_3.jpg";
import Img4 from "../../images/cartoon_4.jpg";
import Img5 from "../../images/cartoon_5.jpg";

import "./slider.css";

const ImageSlider = () => {

    // Note: Handeling states here...!
    const [slides, setSlides] = useState([
        Img1,
        Img2,
        Img3,
        Img4,
        Img5
    ]);
    const [startingIndex, setStartingIndex] = useState(0);

    // Note: Slider handler...!
    const sliderHandler = () => {
        setTimeout(() => {
            let initialPoint = startingIndex;
            initialPoint = initialPoint + 1;
            setStartingIndex(initialPoint);

            if (initialPoint == slides.length) {
                initialPoint = 0;
                setStartingIndex(initialPoint);
            };
        }, 2000);
    };

    // Note: Component mounted hook...!
    useEffect(() => {
        sliderHandler();
    }, [startingIndex]);

    return (
        <Fragment>
            <div className='container'>
                <h1> Image Slider React JS </h1>

                <img
                    src={slides[startingIndex]}
                    alt={slides[startingIndex]}
                    title={slides[startingIndex]}
                    className="slide-image"
                />
            </div>
        </Fragment>
    );
};

export default ImageSlider;