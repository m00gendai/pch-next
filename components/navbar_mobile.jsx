import { useState, useEffect } from "react"
import Link from "next/link"
import s from "../styles/navbar_mobile.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar_Mobile(){

    const [overTrigger, setOverTrigger] = useState(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState(false) // checks if submenu is visible

    function handleSubMenuTrigger(e){
        console.log(e.type)
        if(e.type == "mouseenter"){
            setOverTrigger(true)
        } else if(e.type == "mouseleave"){
            setOverTrigger(false)
        } else {
            setVisible(!visible)
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
            <div className={s.menu} onClick={(e)=>handleSubMenuTrigger(e)}>
                {visible?
                <CloseIcon sx={{
                    color: "white",
                    fontSize: "5vh"
                }}/>
            :
                <MenuIcon sx={{
                    color: "white",
                    fontSize: "5vh"
                }}/>
            }
            </div>
            {visible?
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
            : null}
        </nav>
    )
}