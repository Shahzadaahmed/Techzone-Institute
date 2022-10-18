// Note: Navigation component...!

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/"> Log In  </Link>
                </li>

                <li className="nav-item">
                    <Link to="sign-up-screen"> Sign Up </Link>
                </li>
            </ul>
        </>
    );
};

export default Navigation;