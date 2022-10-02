import React from "react";

const Header = (props) => {
    // console.log("Header Props: ", props);

    let schoolInfo = {
        schoolName : "Custom Public School"
    };

    return (
        <>
            <h1> My company name is {props.data.company} </h1>
            <h2> React World </h2>
        </>
    );
};

export default Header;