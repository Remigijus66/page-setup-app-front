import React, { useContext } from 'react';

import ControlPanel from '../components/ControlPanel';
import Header from '../components/Header';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import IndexContext from '../context/IndexContext';




const IndexPage = () => {
  const { topColor, sideColor, sidebarOn, postsHeaderOn, bgImage, headerText, headerHight, footerColor, footerOn, darkmode } = useContext(IndexContext)


  return (
    <div className={`container d-flex f-wrap ${darkmode}`}>

      <div className='grow1'><Login />
        <ControlPanel /></div>
      <div className='border grow3 d-flex f-wrap f-column'>
        <header className='toolbar border grow1' style={{ backgroundColor: darkmode === 'dark' ? 'rgb(61, 61, 61)' : topColor }}> <Header /></header>

        <div className='d-flex f-wrap grow7' >
          {sidebarOn && <div className='border grow1 d-flex f-wrap f-column' style={{ backgroundColor: darkmode === 'dark' ? 'rgb(61, 61, 61)' : sideColor }}><Sidebar /></div>}

          <div className='page-main border grow3 d-flex f-wrap f-column'>{postsHeaderOn && <header className='header border' style={{ height: headerHight + 'px', backgroundImage: `${darkmode === 'dark' ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),' : ''}url(${bgImage})` }}><h3>{headerText}</h3></header>}

            <Posts />

            {footerOn && <footer className='border grow1 ' style={{ backgroundColor: darkmode === 'dark' ? 'rgb(61, 61, 61)' : footerColor }}>footer</footer>}</div>
        </div>

      </div>
    </div >
  );
};

export default IndexPage;