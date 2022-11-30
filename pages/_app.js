import Navbar from "../components/navbar"
import Navbar_Mobile from "../components/navbar_mobile"
import '../styles/globals.css'
import { useState } from "react"
import { useMediaQuery } from '@react-hook/media-query'

function MyApp({ Component, pageProps }) {

  const isMobile = useMediaQuery('only screen and (orientation: portrait)')

  return(
    <>
    {isMobile ?
        <Navbar_Mobile />
      :
        <Navbar />
    }
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
