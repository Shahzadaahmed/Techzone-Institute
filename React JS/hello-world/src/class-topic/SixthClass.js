import React, { useEffect, useState } from 'react';

const SixthClass = () => {
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);

    // Note: When this component mounted thwn this hook will run...!
    useEffect(() => {
        console.log('Rendered 1 time');
    }, []);

    // Note: This hook willl run every time...!
    useEffect(() => {
        console.log("Rendered multiple time!");
    });

    // Note: This hook will run in every toggle state update
    useEffect(() => {
        console.log('Toggle state is running');
    }, [toggle]);

    const testing = () => setCounter(counter + 1);
    const toggleState = () => setToggle(!toggle);

    return (
        <>
            <h1> Counter {counter} </h1>
            <h2> {toggle ? "A" : "B"} </h2>
            <button onClick={testing}> Testing </button>
            <button onClick={toggleState}> Toggle State </button>
        </>
    );
};

export default SixthClass;