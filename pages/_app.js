import Navbar from "../components/navbar"
import Navbar_Mobile from "../components/navbar_mobile"
import Footer from "../components/footer"
import '../styles/globals.css'
import { useMediaQuery } from '@react-hook/media-query'

function MyApp({ Component, pageProps }) {

  const isMobile = useMediaQuery('only screen and (max-aspect-ratio: 13/9)')

  return(
    <>
    {isMobile ?
        <Navbar_Mobile />
      :
        <Navbar />
    }
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}

export default MyApp
