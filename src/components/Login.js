import React, { useContext } from 'react';
import { useRef } from 'react';
import IndexContext from '../context/IndexContext';

const Login = () => {
  const { logged, setLogged, message, setMessage, logoImage,
    setLogoImage,
    logoWidth,
    setLogoWidth,
    topLinks,
    setTopLinks,
    topColor,
    setTopColor,
    sideColor,
    setSideColor,
    sidebarOn,
    setSidebarOn,
    sidebarLinks,
    setSidebarLinks,
    postsHeaderOn,
    setPostsHeaderOn,
    bgImage,
    setBgImage,
    headerText,
    setHeaderText,
    headerHight,
    setHeaderHight,
    verticalLayout,
    setVerticalLayout,
    footerColor,
    setFooterColor,
    footerOn,
    setFooterOn,
    posts,
    setPosts,
    darkmode,
    setDarkmode,
  } = useContext(IndexContext)
  const loginNameRef = useRef()
  const registerNameRef = useRef()


  const post = async (data, url) => {
    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const res = await fetch("http://localhost:4001/" + url, options)
    return await res.json()
  }

  const login = async () => {
    const user = {
      name: loginNameRef.current.value
    }
    const res = await post(user, "loginSettings")
    console.log(res)
    if (res.error === false) { setLogged(user.name); setMessage(''); applySettings(res.data) }
    if (res.error === true) setMessage(res.message)
  }
  const register = async () => {
    const user = {
      name: registerNameRef.current.value
    }
    const res = await post(user, "registerSettings")
    console.log(res)
    if (res.error === false) { setLogged(user.name); setMessage('') }
    if (res.error === true) setMessage(res.message)

  }
  const applySettings = (userSettings) => {
    console.log(userSettings)
    if (userSettings.logoImage !== undefined) setLogoImage(userSettings.logoImage)
    if (userSettings.logoWidth !== undefined) setLogoWidth(userSettings.logoWidth)
    if (userSettings.topLinks !== undefined) setTopLinks(userSettings.topLinks)
    if (userSettings.topColor !== undefined) setTopColor(userSettings.topColor)
    if (userSettings.sideColor !== undefined) setSideColor(userSettings.sideColor)
    if (userSettings.sidebarOn !== undefined) setSidebarOn(userSettings.sidebarOn)
    if (userSettings.sidebarLinks !== undefined) setSidebarLinks(userSettings.sidebarLinks)
    if (userSettings.postsHeaderOn !== undefined) setPostsHeaderOn(userSettings.postsHeaderOn)
    if (userSettings.bgImage !== undefined) setBgImage(userSettings.bgImage)
    if (userSettings.headerText !== undefined) setHeaderText(userSettings.headerText)
    if (userSettings.headerHight !== undefined) setHeaderHight(userSettings.headerHight)
    if (userSettings.verticalLayout !== undefined) setVerticalLayout(userSettings.verticalLayout)
    if (userSettings.footerColor !== undefined) setFooterColor(userSettings.footerColor)
    if (userSettings.footerOn !== undefined) setFooterOn(userSettings.footerOn)
    if (userSettings.posts !== undefined) setPosts(userSettings.posts)
    if (userSettings.darkmode !== undefined) setDarkmode(userSettings.darkmode)
  }
  const logout = async () => {
    setLogged('')
    const user = {
      name: ''
    }
    const res = await post(user, "loginSettings")
    console.log(res)
    if (res.error === false) { setLogged(user.name); setMessage(''); applySettings(res.data) }
    if (res.error === true) setMessage(res.message)
    applySettings(res)

  }
  const saveSettings = async () => {
    const user = {
      name: logged,
      logoImage: logoImage,
      logoWidth: logoWidth,
      topLinks: topLinks,
      topColor: topColor,
      sideColor: sideColor,
      sidebarOn: sidebarOn,
      sidebarLinks: sidebarLinks,
      postsHeaderOn: postsHeaderOn,
      bgImage: bgImage,
      headerText: headerText,
      headerHight: headerHight,
      verticalLayout: verticalLayout,
      footerColor: footerColor,
      footerOn: footerOn,
      posts: posts,
      darkmode: darkmode,
    }
    const res = await post(user, "saveSettings")
    console.log(res)
    // if (res.error === false) { setLogged(user.name); setMessage(''); applySettings(res.data) }
    // if (res.error === true) setMessage(res.message)
  }

  return (
    <div>
      {logged === '' && <div>
        <input type="text" ref={loginNameRef} placeholder='Enter Name' />
        <button onClick={login}>Login</button>
        <input type="text" ref={registerNameRef} placeholder='Enter Name' />
        <button onClick={register}>Register</button>
      </div>}
      {!(message === '') && <h3 style={{ color: 'red' }}> {message}</h3>}
      {!(logged === '') && <h3>{logged} is logged in</h3>}
      {!(logged === '') && <button onClick={saveSettings}>Save settings</button>
      }
      {!(logged === '') && <button onClick={logout}>Logout</button>
      }
    </div>
  );
};

export default Login;



// const post = async (data, url) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(data)
//   }
//   const res = await fetch("http://localhost:4001/" + url, options)
//   return await res.json()
// }

// buttons[0].onclick = async () => {
//   const user = {
//     email: inputs[0].value,
//     passOne: inputs[1].value,
//     passTwo: inputs[2].value
//   }

//   const res = await post(user, "register")

//   if (res.error) return errorDivs[0].innerHTML = res.message
//   errorDivs[0].innerHTML = ""

//   console.log(res)
// }