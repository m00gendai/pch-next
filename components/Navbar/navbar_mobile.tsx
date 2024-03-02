"use client"

import { useState } from "react"
import React from "react";
import Link from "next/link"
import { GiHamburger, GiKnifeFork } from "react-icons/gi";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { navbar } from "./navbarStructure";
import s from "./navbar_mobile.module.css"



export default function Navbar_Mobile(){

    const [visible, setVisible] = useState<boolean>(false)
    const [submenu, setSubmenu] = useState<string>("")

    function handleSubMenuTrigger(e:React.MouseEvent, menu:string){
        submenu === menu ? setSubmenu("") : setSubmenu(menu)
    }

    function handleLinkClick(){
        setTimeout(function(){
            setVisible(!visible)
        }, 250)
    }

    return(
        <nav className ={s.nav}>
            <Link className={s.homeLink} href={navbar[0].url} title="Home"></Link>
            <div className={s.menu} onClick={()=>{setVisible(!visible)}} title="Menü">
            {visible ?
                <GiKnifeFork style={{fontSize: "2rem", color: "white"}}/>
            :
                <GiHamburger style={{fontSize: "2rem", color: "white"}}/>
            }
            </div>
        {visible ?
            <div className={s.linkContainer}>
                {navbar.map((item, index)=>{
                    return (
                        item.sub ? 
                        <React.Fragment key={`subMain_${index}`}>
                            <div className={s.link} onClick={(e)=>{handleSubMenuTrigger(e, item.name)}}>{`${item.name}`}{submenu === item.name ? <BsCaretUp /> : <BsCaretDown />}</div>
                            {submenu === item.name ? 
                                <div className={s.subLinkContainer}>
                                    {item.sub?.map((sub, index)=>{
                                        return <Link className={s.sublink} href={sub.url} key={`sub_${index}`} onClick={()=>handleLinkClick()}>{`${sub.name}`}</Link>
                                    })}
                                </div>
                            
                            :
                                null
                            }
                        </React.Fragment>
                        :
                        < Link className={s.link} href={item.url} key={`main_${index}`} onClick={()=>handleLinkClick()}>{`${item.name}`}</Link>
                    )
                })}
            </div>
        : 
            null
        }
        </nav>
    )
}