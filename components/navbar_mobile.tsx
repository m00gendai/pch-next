"use client"

import { useState } from "react"
import Link from "next/link"
import s from "@/styles/components/navbar_mobile.module.css"
import { GiHamburger, GiKnifeFork } from "react-icons/gi";

export default function Navbar_Mobile(){

    const [visible, setVisible] = useState<boolean>(false) // checks if submenu is visible

    return(
        <nav className ={s.nav}>
            {
            visible ?
                null
            :
                <Link className={s.homeLink} href="/"></Link>
            }   
            <div className={s.menu} onClick={()=>{setVisible(!visible)}}>
                {
                visible ?
                    <GiKnifeFork style={{fontSize: "2rem", color: "white"}}/>
                :
                    <GiHamburger style={{fontSize: "2rem", color: "white"}}/>
                }
            </div>
            {
            visible ?
                <div className={s.linkContainer}>
                    <Link className={s.link} href="/">Home</Link>
                    <Link className={s.link} href="/anlaesse">Anlässe</Link>
                    <Link className={s.link} href="/resultate">Resultate</Link>
                    <div className={s.link} >Schiessen</div>
                    <div className={s.subLinkContainer} >
                        <Link className={s.link} href="/schiessen/schwabenkrieg-erinnerungsschiessen">Schwabenkrieg-Erinnerungsschiessen</Link>
                        <Link className={s.link} href="/schiessen/obligatorisches">Obligatorisches</Link>
                        <Link className={s.link} href="/schiessen/feldschiessen">Feldschiessen</Link>
                        <Link className={s.link} href="/schiessen/hilfsmittel">Zugelassene Hilfsmittel und Pistolen</Link>
                    </div>
                    <div className={s.link} >Verein</div>
                    <div className={s.subLinkContainer} >
                        <Link className={s.link} href="/verein/informationen">Informationen</Link>
                        <Link className={s.link} href="/verein/mitmachen">Mitmachen</Link>
                    </div>
                    <Link className={s.link} href="/links">Links</Link>
                </div>
            : 
                null
            }
        </nav>
    )
}