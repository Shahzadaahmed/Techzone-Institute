// Note: TextAnimation component...!

import React, { Fragment, useState, useEffect } from 'react';
import "./style.css";

const TextAnimation = () => {

    // Note: Handeling states here...!
    const [word, setWord] = useState(["S", "t", "u", "n", "n", "i", "n", "g"]);
    const [animationInitialPoint, setAnimationInitialPoint] = useState(0);

    // Note: Function to handle animationInitialPoint state...!
    const handleCounts = () => {
        setTimeout(() => {
            let countsClone = animationInitialPoint;
            countsClone = countsClone + 1;
            setAnimationInitialPoint(countsClone);

            if (countsClone == word.length) {
                countsClone = 0;
                setAnimationInitialPoint(countsClone);
            };
        }, 400);
    };

    // Note: This hook will work on every update of animationInitialPoint state...!
    useEffect(() => {
        handleCounts();
    }, [animationInitialPoint]);

    return (
        <Fragment>
            <div className='ta-container'>
                {
                    word.map((item, index) => {
                        return (
                            <span
                                key={index}
                                className="text"
                                style={{
                                    color: (animationInitialPoint == index) ? ("blue") : ("lightskyblue")
                                }}
                            >
                                {item}
                            </span>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default TextAnimation;