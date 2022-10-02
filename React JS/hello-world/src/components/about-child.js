import React from 'react';

const AboutChild = (props) => {
    let { dataList } = props;
    // console.log(dataList);

    return (
        <>
            <h3> {dataList} </h3>
        </>
    );
};

export default AboutChild;