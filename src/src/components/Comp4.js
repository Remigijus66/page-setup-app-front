import React, { useContext, useRef } from 'react';
import MainContext from "../context/MainContext";

const Comp4 = () => {
  const inpRef = useRef()
  const { setColor } = useContext(MainContext)

  return (
    <div>
      {/* <h3>Color</h3> */}
      <input type="color" ref={inpRef} />
      <button onClick={() => setColor(inpRef.current.value)}>Set color</button>
    </div>
  );
};


export default Comp4;