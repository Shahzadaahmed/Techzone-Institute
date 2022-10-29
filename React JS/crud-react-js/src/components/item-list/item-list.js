// Note: ItemList component...!

import React, { useEffect, useState } from 'react';

const ItemList = () => {

    // Note: Handeling states here...!
    const [dataList, setDataList] = useState([]);

    // Note: Mounted Hook...!
    useEffect(() => {
        let fetchItemsData = localStorage.getItem("ElectronicItemsList")
        let dataInJSON = JSON.parse(fetchItemsData);
        if (dataInJSON) setDataList(dataInJSON);
    }, []);

    return (
        <>
            <h1> Items List Screen! </h1>

            {
                (dataList && dataList.length > 0)
                    ?
                    (
                        dataList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3> {`${index + 1} ${item.itemName}`} </h3>
                                </div>
                            );
                        })
                    )
                    :
                    (<h2> Data Not Found! </h2>)
            }
        </>
    );
};

export default ItemList;