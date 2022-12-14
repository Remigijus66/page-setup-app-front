import React, { useContext } from 'react';
import IndexContext from '../context/IndexContext';


const Sidebar = () => {
  const { sidebarLinks } = useContext(IndexContext)



  return (
    <div className='d-flex f-wrap f-column' >
      <h4>Sidebar</h4>
      {sidebarLinks.map((e, i) => <a href={e.url} key={i}>{e.name}</a>)}




    </div>
  );
};

export default Sidebar;