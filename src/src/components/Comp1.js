import React, { useContext } from 'react';
import MainContext from "../context/MainContext";

const Comp1 = () => {
  const { text, size, color } = useContext(MainContext)

  return (
    <div style={{ backgroundColor: color, height: size[0] + 'px', width: size[1] + 'px', color: 'white' }}>
      <h4> {text} </h4>
      <h4> Color: {color} </h4>
      <h4>Height: {size[0]} Width: {size[1]} </h4>
    </div>

  );
};

export default Comp1;