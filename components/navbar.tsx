"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import s from "@/styles/components/navbar.module.css"

export default function Navbar(){

    const [overTrigger, setOverTrigger] = useState<boolean>(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState<boolean>(false) // checks if submenu is visible

    function handleSubMenuTrigger(e:React.MouseEvent){
        if(e.type == "mouseenter"){
            setOverTrigger(true)
        } else if(e.type == "mouseleave"){
            setOverTrigger(false)
        }
    }

    useEffect(()=>{
        if(overTrigger){
            setVisible(true)
        }
        if(!overTrigger){
            setVisible(false)
        }
    },[overTrigger])


    return(
        <nav className ={s.nav}>
            <div className={s.linkContainer}>
                <Link className={s.homeLink} href="/"></Link>
                <Link className={s.link} href="/anlaesse">Anlässe</Link>
                <Link className={s.link} href="/resultate">Resultate</Link>
                <div className={s.surLinkContainer} onMouseEnter={(e)=>handleSubMenuTrigger(e)} onMouseLeave={(e)=>handleSubMenuTrigger(e)}>
                    <div className={s.link} >Schiessen</div>
                    {visible?
                    <div className={s.subLinkContainer} >
                        <Link className={s.sublink} href="/schiessen/schwabenkrieg-erinnerungsschiessen">Schwabenkrieg-Erinnerungsschiessen</Link>
                        <Link className={s.sublink} href="/schiessen/obligatorisches">Obligatorisches</Link>
                        <Link className={s.sublink} href="/schiessen/feldschiessen">Feldschiessen</Link>
                        <Link className={s.sublink} href="/schiessen/hilfsmittel">Zugelassene Hilfsmittel und Pistolen</Link>
                    </div>
                    : null}
                </div>
                <Link className={s.link} href="/verein">Verein</Link>
                <Link className={s.link} href="/links">Links</Link>
            </div>
        </nav>
    )
}