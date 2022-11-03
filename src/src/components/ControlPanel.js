import React, { useContext } from 'react';
import { useRef } from 'react';
import IndexContext from '../context/IndexContext';


const ControlPanel = () => {
  const { setLogoImage, logoWidth, setLogoWidth, topLinks, setTopLinks, setTopColor, setSideColor, sidebarOn, setSidebarOn, sidebarLinks, setSidebarLinks, postsHeaderOn, setPostsHeaderOn, setBgImage, setHeaderText, setHeaderHight, setFooterColor, footerOn, setFooterOn, verticalLayout, setVerticalLayout, posts, setPosts, darkmode, setDarkmode, logged } = useContext(IndexContext)
  const logoImageRef = useRef()
  const logoWidthRef = useRef()
  const linkUrlRef = useRef()
  const linkNameRef = useRef()
  const topColorRef = useRef()
  const sideColorRef = useRef()
  const sideLinkUrlRef = useRef()
  const sideLinkNameRef = useRef()
  const bgImageRef = useRef()
  const headerTextRef = useRef()
  const headerHightRef = useRef()
  const footerColorRef = useRef()
  const postImageRef = useRef()
  const postHeaderRef = useRef()
  const postTextRef = useRef()


  const addOneLink = () => {
    const newLink = { url: linkUrlRef.current.value, name: linkNameRef.current.value }
    setTopLinks([...topLinks, newLink]);
  }
  const addSideLink = () => {
    const newLink = { url: sideLinkUrlRef.current.value, name: sideLinkNameRef.current.value, }
    setSidebarLinks([...sidebarLinks, newLink]);

  }
  const addPost = () => {
    const newPost = {
      image: postImageRef.current.value, header: postHeaderRef.current.value,
      text: postTextRef.current.value,
    }
    setPosts([...posts, newPost])
    console.log(posts)
  }
  const toggleSidebar = () => {
    sidebarOn ? setSidebarOn(false) : setSidebarOn(true)
  }
  const togglePostsHeader = () => {
    postsHeaderOn ? setPostsHeaderOn(false) : setPostsHeaderOn(true)
  }
  const toggleFooter = () => {
    footerOn ? setFooterOn(false) : setFooterOn(true)
  }
  const toggleLayout = () => {
    verticalLayout === '' ? setVerticalLayout('f-column') : setVerticalLayout('')
  }
  const toggleDarkmode = () => {
    darkmode === '' ? setDarkmode('dark') : setDarkmode('')
  }


  return (
    <div>
      <h4>Controlpanell</h4>
      {!(logged === '') && <div>
        <input type="text" ref={logoImageRef} placeholder='Logo image' />
        <button style={{ width: { logoWidth } + 'px' }} onClick={() => setLogoImage(logoImageRef.current.value)}>Change logo</button>
        <input type="number" ref={logoWidthRef} placeholder='Logo size (px)' />
        <button onClick={() => setLogoWidth(logoWidthRef.current.value)}>Change size</button>

        <input type="text" ref={linkUrlRef} placeholder='Toolbar Link url' />
        <input type="text" ref={linkNameRef} placeholder='Toolbar Link name' />
        <button onClick={addOneLink}>Add link</button>
        <input type="color" ref={topColorRef} placeholder='Toolbar color' />
        <button onClick={() => setTopColor(topColorRef.current.value)}>Toolbar color</button>
        <div className='gap'></div>
        <input type="color" ref={sideColorRef} placeholder='Toolbar color' />
        <button onClick={() => setSideColor(sideColorRef.current.value)}>Sidebar color</button>
        <button onClick={toggleSidebar}>Toggle Sidebar ON/Off</button>
        <input type="text" ref={sideLinkUrlRef} placeholder='Sidebar Link url' />
        <input type="text" ref={sideLinkNameRef} placeholder='Sidebar Link name' />
        <button onClick={addSideLink}>Add link</button>
        <button >Add sidebar links</button>
        <div className='gap'></div>
        <button onClick={togglePostsHeader}>Toggle Header ON/OFF</button>
        <input type="text" ref={bgImageRef} placeholder='Header background ' />
        <button onClick={() => setBgImage(bgImageRef.current.value)}>Set image</button>
        <input type="text" ref={headerTextRef} placeholder='Header text' />
        <button onClick={() => setHeaderText(headerTextRef.current.value)}> Set text
        </button>
        <input type="number" ref={headerHightRef} placeholder='Header hight (px)' />
        <button onClick={() => setHeaderHight(headerHightRef.current.value)}> Set height
        </button>
        <div className='gap'></div>
        <input type="text" ref={postImageRef} placeholder='Post Image' />   <input type="text" ref={postHeaderRef} placeholder='Post Header' />   <input type="text" ref={postTextRef} placeholder='Post Text' />  <button onClick={addPost}>Add Post</button>
        <button onClick={toggleLayout}>Posts layout horizontal/vertical</button>
        <div className='gap'></div>
        <input type="color" ref={footerColorRef} placeholder='Footer color' />
        <button onClick={() => setFooterColor(footerColorRef.current.value)}>Footer color</button>
        <button onClick={toggleFooter}>Toggle Footer ON/OFF</button>
        <div className='gap'></div>
        <button onClick={toggleDarkmode}>Toggle dark mode ON/OFF</button>
      </div>
      }
    </div>
  );
};

export default ControlPanel;