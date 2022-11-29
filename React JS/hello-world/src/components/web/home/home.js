// Note: Home component...!

import React, { useEffect, useState } from 'react';
import "./home.css";

const Home = () => {

    // Note: Handeling states here...!
    const [bgColor, setBgColor] = useState("black");

    // Note: Mounted hook...!
    useEffect(() => {
        // Program: 1
        let arr = [1, 2, 3, 4, 5];
        arr = arr.splice(0, arr.length);
        console.log(arr.length);
    }, []);


    // Note: Btn handler...!
    const btnHandler = () => {
        // console.log(document.getElementById('custom-btn').className);

        if (document.getElementById('custom-btn').className == 'btn-class') {
            document.getElementById('custom-btn').className = "new-class";
        }

        else {
            document.getElementById('custom-btn').className = 'btn-class';
        }
    };

    // Note: color handler...!
    const colorHandler = (color) => setBgColor(color);

    return (
        <>
            <div style={{
                height: '100vh',
                width: "100%",
                backgroundColor: bgColor
            }}>




                <button
                    className='btn-class'
                    id='custom-btn'
                    onClick={btnHandler}
                >
                    Test
                </button>

                <div>
                    <button onClick={() => colorHandler('blue')}> Blue </button>
                    <button onClick={() => colorHandler('yellow')}> Yellow </button>
                    <button onClick={() => colorHandler('green')}> Green </button>
                    <button onClick={() => colorHandler('red')}> Red </button>
                </div>
            </div>
        </>
    );
};

export default Home;