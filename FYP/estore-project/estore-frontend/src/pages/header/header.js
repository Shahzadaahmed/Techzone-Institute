// Header component...!

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    // Note: Checking user auth status...!
    const { authenticatedUser } = useSelector(({ authStates }) => authStates);
    // console.log("User auth status: ", authenticatedUser);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'> eStore </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <Link to={'cart'}>
                                Cart
                            </Link>
                        </MDBNavbarItem>

                        {
                            authenticatedUser ?
                                <MDBNavbarItem style={{ marginLeft: "auto" }}>
                                    <MDBNavbarLink>Logout</MDBNavbarLink>
                                </MDBNavbarItem> :
                                <MDBNavbarItem style={{ marginLeft: "auto" }}>
                                    <Link to={'login'}>
                                        Login
                                    </Link>
                                </MDBNavbarItem>
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}