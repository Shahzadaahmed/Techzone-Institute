// Note: Navigation component...!

import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={"/"}> Home </Link>
                </li>

                <li>
                    <Link to={"about-screen"}> About </Link>
                </li>

                <li>
                    <Link to={"contact-screen"}> Contact </Link>
                </li>
            </ul>
        </>
    );
};

export default Navigation;