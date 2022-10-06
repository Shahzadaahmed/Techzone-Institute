import React, { useState } from 'react';
import offImg from "../images/off.gif";
import onImg from "../images/on.gif";

const Bulb = () => {
    const [toggleBulb, setToggleBulb] = useState(false);

    const toggleHandler = () => {
        setToggleBulb(!toggleBulb);
    }

    return (
        <>
            <h1> Bulb App </h1>
            <h2> {(toggleBulb) ? ('Bulb On') : ('Bulb Off')} </h2>

            <img
                src={(toggleBulb) ? (onImg) : (offImg)}
                alt="Off"
                title='Off'
                style={{
                    height: 100,
                    width: 100,
                    margin: 10,
                    objectFit: "contain"
                }}
            />
            <br />

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={toggleHandler}
            >
                {(toggleBulb) ? ('Off') : ('On')}
            </button>
        </>
    )
}

export default Bulb;