"use client"

import { CookieConsent, getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from "react"
import ReactGA from "react-ga4";
import Link from "next/link"
import c from "./CookieProvider.module.css"

interface Props{
    children: React.ReactNode
}

export default function CookieProvider({children}:Props){

    useEffect(() => {
        const isConsent = getCookieConsentValue("pchallau_analytics");
        if (isConsent === "true") {
          handleAcceptCookie();
        }
      }, []);
    
      const initGA = (id: string) => {
          ReactGA.initialize(id);
      };

      const handleAcceptCookie = () => {
        initGA(`${process.env.NEXT_PUBLIC_GA}`)
    };
  
    return(
        <>
            {children}
            <CookieConsent
                location="bottom"
                buttonText="Einverstanden"
                cookieName="pchallau_analytics"
                style={{background: "white"}}
                containerClasses={c.bar}
                contentClasses={c.inner}
                buttonWrapperClasses={c.buttons}
                buttonClasses={c.accept}
                declineButtonClasses={c.decline}
                enableDeclineButton
                declineButtonText="Ablehnen"
                onAccept={handleAcceptCookie}
                disableStyles
                disableButtonStyles
            >
                <span className={c.span}>
                    Diese Webseite nutzt Cookies für die Analyse von Besucherverhalten! 
                </span>
                <Link 
                    style={{margin: "0 1rem" }} 
                    title="Impressum"  
                    href="/impressum"
                >
                    Impressum
                </Link>
                <Link 
                    style={{margin: "0 1rem" }}
                    title="Datenschutzerklärung" 
                    href="/datenschutz"
                >
                    Datenschutzerklärung
                </Link>
            </CookieConsent>
        </>
    )
}