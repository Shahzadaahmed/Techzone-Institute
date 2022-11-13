// Note: Slider component...!

import React, { useEffect, useState } from 'react';
import "./slider.css";

// Note: Importing images...!
import Img_1 from "../../images/cartoon_1.jpg";
import Img_2 from "../../images/cartoon_2.jpg";
import Img_3 from "../../images/cartoon_3.jpg";
import Img_4 from "../../images/cartoon_4.jpg";
import Img_5 from "../../images/cartoon_5.jpg";

const Slider = () => {

    // Note: Handeling states here...!
    const [sliderData, setSliderData] = useState([
        Img_1,
        Img_2,
        Img_3,
        Img_4,
        Img_5
    ]);
    const [sliderIndex, setSliderIndex] = useState(0);

    // Note: Slider handler...!
    const sliderHandler = () => {
        setTimeout(() => {
            let sliderIndexClone = sliderIndex;
            sliderIndexClone = sliderIndexClone + 1;
            setSliderIndex(sliderIndexClone);

            if (sliderIndexClone == sliderData.length) {
                sliderIndexClone = 0;
                setSliderIndex(sliderIndexClone);
            }
        }, 2000);
    };

    // Note: Mounted hook...!
    useEffect(() => {
        sliderHandler();
    }, [sliderIndex]);

    return (
        <>
            <div>
                <h1> Image Slider in React JS </h1>

                <img
                    src={sliderData[sliderIndex]}
                    alt={'Slider Image'}
                    title={'Slider Image'}
                    className="slider-images"
                />
            </div>
        </>
    );
};

export default Slider;