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

const AppRoures = () => {
    return (
        <>
            <Router>
            <Navigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about-screen' element={<About />} />
                    <Route path='contact-screen' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRoures;