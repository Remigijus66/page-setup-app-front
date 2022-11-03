import React, { useContext } from 'react';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';

const Comp2 = () => {


  return (
    <div>
      <h3>Settings:</h3>
      <Comp3 />
      <Comp4 />
      <Comp5 />
    </div>
  );
};

export default Comp2;