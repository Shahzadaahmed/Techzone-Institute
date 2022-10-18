// Note: SignUpScreen component...!

import React, { useState, useEffect } from 'react';

const SignUpScreen = () => {

    // Note: Handeling states here...!
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Note: COmponent mounted hook...!
    useEffect(() => {
        // Note: Fetching local storage DB data...!
        let dbData = localStorage.getItem("Users");
        // console.log(dbData);

        if (dbData == null) {
            let emptyArr = JSON.stringify([]);
            localStorage.setItem("Users", emptyArr);
        };
    }, []);

    // Note: Function to registered user...!
    // const registeredUser = () => {
    //     let formData = {
    //         name,
    //         email,
    //         password
    //     };
    //     // console.log(formData);

    //     // Note: Saving user in local storage db...!
    //     if (localStorage.getItem("Users") != null) {
    //         let prevData = localStorage.getItem("Users");
    //         prevData = JSON.parse(prevData);
    //         prevData.push(formData);
    //         prevData = JSON.stringify(prevData);
    //         localStorage.setItem("Users", prevData);
    //     }

    //     else {
    //         localStorage.setItem("Users", []);
    //     }
    // };

    return (
        <>
            <h1> Sign Up </h1>

            <label htmlFor='name'>
                Name:
                <input
                    id='name'
                    type={'text'}
                    placeholder="Please Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />

            <label htmlFor='email'>
                Email:
                <input
                    id='email'
                    type={'email'}
                    placeholder="Please Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />

            <label htmlFor='password'>
                Password:
                <input
                    id='password'
                    type={'password'}
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />

            <button
            // onClick={registeredUser}
            >
                Registered User
            </button>
        </>
    );
};

export default SignUpScreen;