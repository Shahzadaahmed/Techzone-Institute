// Note: Home component...!

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    // const goToAbout = () => navigate("about-screen");

    return (
        <>
            <h1> Home screen! </h1>
            <button onClick={() => navigate("about-screen")}> Go to about </button>
        </>
    );
};

export default Home;