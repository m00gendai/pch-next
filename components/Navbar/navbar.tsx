"use client"

import { useState, useEffect } from "react"
import React from "react"
import Link from "next/link"
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { navbar } from "./navbarStructure";
import s from "./navbar.module.css"

export default function Navbar(){

    const [overTrigger, setOverTrigger] = useState<boolean>(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState<boolean>(false) // checks if submenu is visible
    const [submenu, setSubmenu] = useState<string>("")
    const [offset, setOffset] = useState<number>(0)

    function handleSubMenuTrigger(e:React.MouseEvent, menu:string){
        submenu === menu ? setSubmenu("") : setSubmenu(menu)
        if(e.type == "mouseenter"){
            setOffset(e.currentTarget.getBoundingClientRect().left)
            setOverTrigger(true)
        } else if(e.type == "mouseleave"){
            setOffset(0)
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
        <>        <nav className ={s.nav}>
            <div className={s.linkContainer}>
                <Link className={s.homeLink} href={navbar[0].url} title="Home"></Link>
                {navbar.map((item, index)=>{
                    return(
                        item.sub && index > 0 ?
                        <div className={s.surLinkContainer} onMouseEnter={(e)=>handleSubMenuTrigger(e, item.name)}  key={`subMain_${index}`}>
                            <div className={s.link} >{`${item.name}`} <BsCaretDown style={{margin: "0 0 0 1rem"}}/></div>
                            
                        </div>
                        :
                        index > 0 ? 
                            <Link className={s.link} href={item.url} key={`main_${index}`}>{`${item.name}`}</Link>
                        :
                            null
                        )
                })}
            </div>
        </nav>
        <nav className={s.nav2} onMouseLeave={(e)=>handleSubMenuTrigger(e, submenu)}>
        {visible && submenu === "Schiessen" ?
                                
                                        <div className={s.items} >
                                            {navbar.map(item =>{
                                                return item.name === submenu && item.sub?.map((sub, index)=>{
                                                    return(
                                                        <Link className={s.sublink} style={{left: offset}} href={sub.url} key={`sub_${index}`}>{`${sub.name}`}</Link>
                                                    )
                                                })})}
                                        </div>

                            :
                               visible && submenu === "Verein" ?
                                
                                <div className={s.items} >
                                    {navbar.map(item =>{
                                        return item.name === submenu && item.sub?.map((sub, index)=>{
                                            return(
                                                <Link className={s.sublink} style={{left: offset}} href={sub.url} key={`sub_${index}`}>{`${sub.name}`}</Link>
                                            )
                                        })})}
                                </div>

                    :
                        null
                    }
        </nav>
        </>
    )
}