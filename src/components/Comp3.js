import React, { useContext } from 'react';
import { useRef } from 'react';
import MainContext from "../context/MainContext";

const Comp3 = () => {
  const inpRef = useRef()
  const { setText } = useContext(MainContext)

  return (
    <div>
      {/* <h3>Text</h3> */}
      <input type="text" ref={inpRef} />
      <button onClick={() => setText(inpRef.current.value)}>Set text</button>
    </div>
  );
};

export default Comp3;