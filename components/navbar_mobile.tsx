"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import s from "../styles/navbar_mobile.module.css"

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
                    "V"
                :
                    "X"
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
                    <Link className={s.link} href="/verein">Verein</Link>
                    <Link className={s.link} href="/links">Links</Link>
                </div>
            : 
                null
            }
        </nav>
    )
}