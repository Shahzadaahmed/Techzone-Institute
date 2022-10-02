import React from "react";
import AboutSection from "./components/about";
import UzairComp from "./components/contact";
import Header from "./components/header";

const App = () => {

    let chars = ['a', 'b', 'c', 'd', 'e'];
    let userInfo = {
        myName: "Ahmed",
        company: "10 Pearls"
    };

    return (
        <>
            <Header data={userInfo} />
            <UzairComp />

            <h1> Welcome to React JS </h1>
            <h2> My name is {userInfo.myName} </h2>

            <hr />
            <AboutSection arrData={chars} />
        </>
    );
};

export default App;