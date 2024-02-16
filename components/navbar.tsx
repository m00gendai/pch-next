"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import s from "@/styles/components/navbar.module.css"
import { BsCaretDown } from "react-icons/bs";

export default function Navbar(){

    const [overTrigger, setOverTrigger] = useState<boolean>(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState<boolean>(false) // checks if submenu is visible
    const [submenu, setSubmenu] = useState<string>("")

    function handleSubMenuTrigger(e:React.MouseEvent, menu:string){
        setSubmenu(menu)
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
                <div className={s.surLinkContainer} onMouseEnter={(e)=>handleSubMenuTrigger(e, "Schiessen")} onMouseLeave={(e)=>handleSubMenuTrigger(e, "Schiessen")}>
                    <div className={s.link} >Schiessen <BsCaretDown style={{margin: "0 0 0 1rem"}}/></div>
                    {visible && submenu === "Schiessen" ?
                    <div className={s.subLinkContainer} >
                        <div className={s.buffer}></div>
                        <div className={s.content}>
                            <div className={s.items}>
                                <Link className={s.sublink} href="/schiessen/schwabenkrieg-erinnerungsschiessen">Schwabenkrieg-Erinnerungsschiessen</Link>
                                <Link className={s.sublink} href="/schiessen/obligatorisches">Obligatorisches</Link>
                                <Link className={s.sublink} href="/schiessen/feldschiessen">Feldschiessen</Link>
                                <Link className={s.sublink} href="/schiessen/hilfsmittel">Zugelassene Hilfsmittel und Pistolen</Link>
                            </div>
                        </div>
                    </div>
                    : null}
                </div>
                <div className={s.surLinkContainer} onMouseEnter={(e)=>handleSubMenuTrigger(e, "Verein")} onMouseLeave={(e)=>handleSubMenuTrigger(e, "Verein")}>
                    <div className={s.link} >Verein <BsCaretDown style={{margin: "0 0 0 1rem"}}/></div>
                    {visible && submenu === "Verein" ?
                    <div className={s.subLinkContainer} >
                        <div className={s.buffer}></div>
                            <div className={s.content}>
                                    <div className={s.items}>
                                        <Link className={s.sublink} href="/verein/informationen">Informationen</Link>
                                        <Link className={s.sublink} href="/verein/mitmachen">Mitmachen</Link>
                                    </div>
                                </div>
                            </div>
                    : null}
                </div>
                <Link className={s.link} href="/links">Links</Link>
            </div>
        </nav>
    )
}