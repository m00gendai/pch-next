import Navbar from "../components/navbar"
import Navbar_Mobile from "../components/navbar_mobile"
import Footer from "../components/footer"
import Link from "next/link"
import '../styles/globals.css'
import CookieConsent from "react-cookie-consent"
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
    <CookieConsent
      location="bottom"
      buttonText="Verstanden"
      cookieName="PCH-Cookie"
      style={{
        background: "rgba(255,255,255,0.7)",
        boxShadow: "2px 0px 5px 0px black"
      }}
      buttonStyle={{
        color: "white",
        background: "linear-gradient(135deg, rgba(12, 197, 73, 1) 0%, rgba(0, 128, 0, 1) 100%)"
      }}
      >
        <span style={{
          color: "black"
         }}
        >
          Diese Webseite nutzt Cookies, um optimal zu funktionieren. Details siehe <u><em><Link href="/datenschutzerklaerung">Datenschutzerklärung</Link></em></u>
        </span>
      </CookieConsent>
    </>
  ) 
}

export default MyApp
