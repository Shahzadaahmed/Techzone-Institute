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

    // Note: Delete handler...!
    const deleteHandler = (data, key) => {
        console.log(data, key);

        let itemListClone = dataList.slice(0);
        itemListClone.splice(key, 1);
        setDataList(itemListClone);

        // Note: Saving data in DB LS...!
        let dataInStr = JSON.stringify(itemListClone);
        localStorage.setItem("ElectronicItemsList", dataInStr);
    };

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
                                    <span> {`${index + 1} ${item.itemName}`} </span>
                                    <button
                                        className='btn btn-secondary m-2'
                                        // onClick={deleteHandler}
                                        onClick={() => deleteHandler(item, index)}
                                    > Delete </button>
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