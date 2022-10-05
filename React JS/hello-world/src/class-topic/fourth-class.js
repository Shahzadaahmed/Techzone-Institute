import React, { useState } from 'react';
import Header from '../components/header/header';

const FourthClass = () => {

    const [myName, setMyName] = useState("ahmed");

    // const handler = () => {
    //     setMyName("Uzair");

    //     setTimeout(() => {
    //         setMyName("ALI");
    //     }, 3000);
    // };

    const handler = () => {
        (myName == "ahmed") ? (setMyName("uzair")) : (setMyName("ahmed"));
    };

    return (
        <>
            <Header topic="4" />
            <h2 style={{ color: (myName == "ahmed") ? ('red') : ('blue') }}> {myName} </h2>
            <button onClick={handler}> Update State </button>
        </>
    );
};

export default FourthClass;