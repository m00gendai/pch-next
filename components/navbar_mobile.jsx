import { useState, useEffect } from "react"
import Link from "next/link"
import s from "../styles/navbar_mobile.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function Navbar_Mobile(){

    const [overTrigger, setOverTrigger] = useState(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState(false) // checks if submenu is visible

    function handleSubMenuTrigger(e){
        if(e.type == "mouseenter"){
            setOverTrigger(true)
        } else if(e.type == "mouseleave"){
            setOverTrigger(false)
        } else { // for click events
            setVisible(!visible)
        }
    }

    useEffect(()=>{ // this needs to be a useEffect because if its handled in the handleSubMenuTrigger() it doesn't work reliably
        if(overTrigger){
            setVisible(true)
        }
        if(!overTrigger){
            setVisible(false)
        }
    },[overTrigger])

    return(
        <nav className ={s.nav}>
            {
            visible ?
                null
            :
                <Link className={s.homeLink} href="/"></Link>
            }   
            <div className={s.menu} onClick={(e)=>handleSubMenuTrigger(e)}>
                {
                visible ?
                    <LocalDiningIcon sx={{
                        color: "white",
                        fontSize: "5vh"
                    }}/>
                :
                    <LunchDiningIcon sx={{
                        color: "white",
                        fontSize: "5vh"
                    }}/>
                }
            </div>
            {
            visible ?
                <div className={s.linkContainer}>
                    <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/">Home</Link>
                    <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/anlaesse">Anlässe</Link>
                    <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/resultate">Resultate</Link>
                    <div className={s.link} >Schiessen</div>
                    <div className={s.subLinkContainer} >
                        <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/schiessen/schwabenkrieg-erinnerungsschiessen">Schwabenkrieg-Erinnerungsschiessen</Link>
                        <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/schiessen/obligatorisches">Obligatorisches</Link>
                        <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/schiessen/feldschiessen">Feldschiessen</Link>
                        <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/schiessen/hilfsmittel">Zugelassene Hilfsmittel und Pistolen</Link>
                    </div>
                    <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/verein">Verein</Link>
                    <Link className={s.link} onClick={(e)=>handleSubMenuTrigger(e)} href="/">Links</Link>
                </div>
            : 
                null
            }
        </nav>
    )
}