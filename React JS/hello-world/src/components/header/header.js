import React from 'react';

const Header = (props) => {
    // console.log("Props of header: ", props);

    return (
        <h1> Topic # {props.topic}: Learning States in React JS </h1>
    );
};

export default Header;