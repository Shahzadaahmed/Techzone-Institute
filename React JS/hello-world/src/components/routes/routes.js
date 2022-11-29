// Note: AppRoures component...!

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navigation from '../web/navigation/navigation';
import Home from '../web/home/home';
import About from '../web/about/about';
import Contact from '../web/contact/contact';
import NotFound from '../web/not-found/not-found';
import Slider from '../slider/slider';

const AppRoures = () => {
    return (
        <>
            <Router>
                <Navigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about-screen' element={<About />} />
                    <Route path='contact-screen' element={<Contact />} />
                    <Route path='slider-screen' element={<Slider />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRoures;