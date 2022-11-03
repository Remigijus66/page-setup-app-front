import React, { useContext } from 'react';
import { useRef } from 'react';
import IndexContext from '../context/IndexContext';


const Sidebar = () => {
  const { sidebarLinks } = useContext(IndexContext)



  return (
    <div className='d-flex f-wrap f-column' >
      <h4>Sidebar</h4>
      {/* <a href="#">Link one </a>
      <a href="#">Link two </a>
      <a href="#">Link three </a> */}
      {sidebarLinks.map((e, i) => <a href={e.url} key={i}>{e.name}</a>)}




    </div>
  );
};

export default Sidebar;