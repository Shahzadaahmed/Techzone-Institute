import React, { useState } from 'react';

const Form = () => {
    const [userInput, setUserInput] = useState("");

    const formHandler = (e) => {
        console.log(e.target.value);
    }

    const handler = () => {
        console.log(userInput);
        setUserInput("");
    }

    return (
        <>
            <h1> Forms in React JS </h1>
            <h2> {userInput} </h2>

            <label>
                Name:
                <input
                    placeholder='Enter Name...'
                    type='text'
                    name='user-name'
                    value={userInput}
                    // onChange={(e) => { setUserInput(e.target.value) }}
                    onChange={ formHandler }
                />
            </label>

            <button onClick={handler}>
                Submit
            </button>
        </>
    )
}

export default Form;