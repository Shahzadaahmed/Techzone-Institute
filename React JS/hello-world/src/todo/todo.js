import React, { useState } from 'react';

const ToDoComp = () => {
    const [userInput, setUserInput] = useState("");
    const [dataList, setDataList] = useState([]);

    const addData = () => {
        let dataListClone = dataList.slice(0);
        dataListClone.push(userInput);
        setDataList(dataListClone);
        setUserInput("");
    };

    return (
        <>
            <h1> Todo List App </h1>
            <hr />
            <div>
                <input
                    type={'text'}
                    placeholder="Todo Input"
                    autoFocus={true}
                    value={userInput}
                    onChange={(e) => { setUserInput(e.target.value) }}
                />
                <button onClick={addData}> Add </button>

                <div>
                    {
                        dataList.map((item, index) => {
                            return (
                                <h3 key={index}> {item} </h3>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ToDoComp;