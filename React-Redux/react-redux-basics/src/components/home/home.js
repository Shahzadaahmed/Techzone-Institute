// Note: Home component...!

import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateNameState, changeNameState } from "../../redux/store/actions/profile-actions/profile-actions";
import Crud from '../crud/crud';

const Home = () => {

  const [userInput, setUserInput] = useState("");

  // Note: Handeling redux here...!
  const dispatch = useDispatch();

  const accessProfileStates = useSelector(({ profileReducerState }) => { return profileReducerState.myName });
  // console.log(accessProfileStates);

  // NOte: FUnction to update redux state...!
  const updateReduxState = () => {
    dispatch(updateNameState());
  };

  const submitForm = () => {
    // console.log(userInput);

    dispatch(changeNameState(userInput));
    setUserInput("");
  };

  return (
    <>
      {/* <h1> Learning Redux JS! </h1>
      <h2> Hi, My name is { accessProfileStates } </h2>

      <button onClick={updateReduxState}> Update State </button>

      <hr />
      <input
        type={'text'}
        placeholder="Update Val..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button onClick={submitForm}>
        Submit
      </button> */}

      <Crud />
    </>
  );
};

export default Home;