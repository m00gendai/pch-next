import Navbar from "../components/navbar"
import Navbar_Mobile from "../components/navbar_mobile"
import Footer from "../components/footer"
import Link from "next/link"
import '../styles/globals.css'
import { useState } from "react"
import Spinner from "../components/Spinner"

function MyApp({ Component, pageProps }) {

  const [show, setShow] = useState(false)

  return(
    <>
   
        <Navbar_Mobile />
        <Navbar />
    {show ? <Spinner /> : null }
    <Component setShow={setShow} {...pageProps} />
    <Footer />
        </>
  ) 
}

export default MyApp
