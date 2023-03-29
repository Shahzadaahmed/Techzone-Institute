// Note: Slider componet...!

import React, { Fragment, useEffect, useState } from 'react';
import "./slider.css";
import image_1 from "./images/cartoon_1.jpg";
import image_2 from "./images/cartoon_2.jpg";
import image_3 from "./images/cartoon_3.jpg";
import image_4 from "./images/cartoon_4.jpg";
import image_5 from "./images/cartoon_5.jpg";

const Slider = () => {

    // Note: Handeling states here...!
    const [sliderData, setSliderData] = useState([
        image_1,
        image_2,
        image_3,
        image_4,
        image_5
    ]);
    const [sliderIndex, setSliderIndex] = useState(0);

    // Note: FUnction to handle slider...!
    const handleSLider = () => {
        setTimeout(() => {
            let indexClone = sliderIndex;
            setSliderIndex(indexClone + 1);

            if (indexClone == sliderData.length - 1) {
                indexClone = 0;
                setSliderIndex(indexClone);
            };
        }, 2000);
    };

    // Note: This hook will run when slider index will change...!
    useEffect(() => {
        handleSLider();
    }, [sliderIndex]);

    return (
        <Fragment>
            <div className='container'>
                <h1 className='header'> Image Slider in React JS </h1>

                <div className='slider-container'>
                    <img
                        src={sliderData[sliderIndex]}
                        alt={`Cartoon ${sliderData[sliderIndex]}`}
                        title={`Cartoon ${sliderData[sliderIndex]}`}
                        className="slider-image"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Slider;