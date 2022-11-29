// Note: Crud component...!

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem, removeAll } from "../../redux/store/actions/crud-actions/crud-actions";

const Crud = () => {

    // Note: Handeling states here...!
    const [userInput, setUserInput] = useState("");
    const [isDataEditable, setIsDataEditable] = useState(false);
    const [prevIndex, setPrevIndex] = useState("");

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    const fetchData = useSelector(({ crudStates }) => { return crudStates.dataList });
    // console.log(fetchData);

    // Note: add item handler...!
    const addItemHandler = () => {
        // console.log(userInput);
        dispatch(addItem(userInput));
        setUserInput("");
    };

    // Note: edit item handler...!
    const editItemHandler = (key, prevData) => {
        // console.log("Key: ", key, prevData);
        setPrevIndex(key);
        setIsDataEditable(true);
        setUserInput(prevData);
    };

    const cancelUpdate = () => {
        setUserInput("");
        setPrevIndex("");
        setIsDataEditable(false);
    };


    const updateHandler = () => {
        // console.log(userInput);
        let obj = {
            key: prevIndex,
            val: userInput
        };
        dispatch(updateItem(obj));
        setUserInput("");
        setPrevIndex("");
        setIsDataEditable(false);
    };


    const deleteAll = () => dispatch(removeAll());

    return (
        <>
            <h1> Crud application using React Redux! </h1>

            <div>
                <input
                    type={'text'}
                    placeholder="Write something..."
                    value={userInput}
                    onChange={(d) => setUserInput(d.target.value)}
                />
                {
                    !isDataEditable ?
                        <div style={{ display: "inline-block" }}>
                            <button onClick={addItemHandler}> Add Item </button>
                            <button
                                disabled={fetchData.length < 1}
                                onClick={deleteAll}
                            > Delete All </button>
                        </div> :
                        <div style={{ display: "inline-block" }}>
                            <button onClick={updateHandler}> Update Item </button>
                            <button onClick={cancelUpdate}> Cancel Update </button>
                        </div>
                }

                <ul>
                    {
                        fetchData.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                    <button onClick={() => dispatch(deleteItem(index))}> Delete </button>
                                    <button onClick={() => editItemHandler(index, item)}> Edit </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Crud;