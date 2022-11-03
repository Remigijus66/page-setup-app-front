import React, { useContext } from 'react';
import { useRef } from 'react';
import MainContext from "../context/MainContext";

const Comp5 = () => {
  const { setSize } = useContext(MainContext)
  const inpHeightRef = useRef()
  const inpWidthRef = useRef()
  return (
    <div>

      <input type="number" ref={inpHeightRef} placeholder='Height' />
      <input type="number" ref={inpWidthRef} placeholder='Width' />
      <button onClick={() => setSize([inpHeightRef.current.value, inpWidthRef.current.value])}>Set size</button>
    </div>
  );
};

export default Comp5;