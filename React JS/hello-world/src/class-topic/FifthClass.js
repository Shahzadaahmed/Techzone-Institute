import React, { useState } from 'react';

const FifthClass = () => {
  const [num, setNum] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  const incrementHandler = () => {
  

    if ( num < 9 ) {
      setNum(num + 1);
    }

    else alert("Limit reached!");
  };

  const decrementHandler = () => {
    setNum(num - 1);
  };

  return (
    <>
      <h1> Counter App </h1>
      <h2> {`Count: ${num}`} </h2>

      <button
        onClick={incrementHandler}
        disabled={ ( num > 9 ) ? (true) : (false) }
      >
        Increment
      </button>
      <button
        onClick={decrementHandler}
      >
        Decrement
      </button>
    </>
  )
}

export default FifthClass;