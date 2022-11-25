import Navbar from "../components/navbar"
import Navbar_Mobile from "../components/navbar_mobile"
import '../styles/globals.css'
import { useState } from "react"

function MyApp({ Component, pageProps }) {

  const [innerWidth, setInnerWidth] = useState(getWindowSize())

  function getWindowSize() {
    if(typeof window != "undefined"){
      return window.innerWidth
    }
  }

  if(typeof window != "undefined"){
    window.addEventListener("resize", function(){
      setInnerWidth(getWindowSize())
    })
  }

  return(
    <>
    {innerWidth >= 765 ?
    <Navbar />
    :
    <Navbar_Mobile />}
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
