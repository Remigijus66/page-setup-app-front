import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import MainContext from "./context/MainContext";
import AgileBoxPage from './pages/AgileBoxPage';
import CopyOfAgileBoxPage from './pages/CopyOfAgileBox';
import IndexPage from './pages/IndexPage';
import IndexContext from './context/IndexContext';


function App() {

  const [user, setUser] = useState("Andrius")
  const [age, setAge] = useState(56)
  const [color, setColor] = useState("red")
  const [text, setText] = useState("Initial text")
  const [size, setSize] = useState([200, 200])

  const states = {
    user,
    setUser,
    age,
    setAge,
    color,
    setColor,
    text,
    setText,
    size,
    setSize
  }

  const [logoImage, setLogoImage] = useState('https://logopond.com/logos/b3f91fee4ad7d1c8b293acfc616c2bb6.png')
  // const [logoImage, setLogoImage] = useState('../public/logo192.png')
  const [logoWidth, setLogoWidth] = useState('100')
  const [topLinks, setTopLinks] = useState([{ url: 'https://www.delfi.lt/', name: 'Link1' }, { url: 'https://www.delfi.lt/', name: 'Link2' }])
  const [topColor, setTopColor] = useState('white')
  const [sideColor, setSideColor] = useState('white')
  const [sidebarOn, setSidebarOn] = useState(true)
  const [sidebarLinks, setSidebarLinks] = useState([{ url: 'https://www.delfi.lt/', name: 'Link1' }, { url: 'https://www.delfi.lt/', name: 'Link2' }])
  const [postsHeaderOn, setPostsHeaderOn] = useState(true)
  const [bgImage, setBgImage] = useState('https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=400')
  const [headerText, setHeaderText] = useState('Header Text')
  const [headerHight, setHeaderHight] = useState('70')
  const [verticalLayout, setVerticalLayout] = useState('');

  const [footerColor, setFooterColor] = useState('white');
  const [footerOn, setFooterOn] = useState(true)
  const [posts, setPosts] = useState([{ image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400", header: 'Post Header', text: 'Post text' }, { image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400", header: 'Post Header', text: 'Post text' }])
  const [logged, setLogged] = useState('')
  const [message, setMessage] = useState('')
  const [darkmode, setDarkmode] = useState('')
  const states1 = {
    logoImage,
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
    logged,
    setLogged,
    message,
    setMessage
  }
  const setDefault = async () => {
    const user = {
      name: '',
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
    const res = await post(user, "setDefault")
  }
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
  useEffect(() => { setDefault() }, [])
  return (
    <div className="p50">


      <IndexContext.Provider value={states1}>
        <MainContext.Provider value={states}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/agile" element={<AgileBoxPage />} />
              <Route path="/copy" element={<CopyOfAgileBoxPage />} />
            </Routes>
          </BrowserRouter>
        </MainContext.Provider>
      </IndexContext.Provider>

    </div>
  );
}

export default App;
