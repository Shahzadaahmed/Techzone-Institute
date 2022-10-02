import React from "react";
import AboutChild from "./about-child";

const AboutSection = (props) => {
    // console.log("Props of about: ", props);
    let { arrData } = props;
    // console.log(arrData);

    return (
        <>
            <h1> This is the list of data which is coming from parent! </h1>
            {
                arrData.map((item, index) => {
                    return (
                        <AboutChild
                            dataList={item}
                            key={index}
                        />
                    );
                })
            }
        </>
    );
};

export default AboutSection;