import React, { useContext } from 'react';
import { useRef } from 'react';
import IndexContext from '../context/IndexContext';


const Header = () => {
  const { logoImage, logoWidth, topLinks } = useContext(IndexContext)



  return (
    <div >
      <img src={logoImage} alt="" style={{ width: logoWidth + 'px' }} />
      {/* <a href="#">Link one </a>
      <a href="#">Link two </a>
      <a href="#">Link three </a> */}
      {topLinks.map((e, i) => <a href={e.url} key={i}>{e.name}</a>)}




    </div>
  );
};

export default Header;