"use client"

import setThatCookie from "@/app/actions/cookieSet"
import s from "./CookieBanner.module.css"
import Link from "next/link"

function accept(){
    setThatCookie("pchallau_analytics", "true")
}

function refuse(){
    setThatCookie("pchallau_analytics", "false")
}

export default function CookieBanner(){
    return(
        <aside className={s.banner}>
            <div className={s.inner}>
                <div className={s.text}>
                    <p>{`Wir nutzen Cookies zur Analyse von Nutzerverhalten. Erst durch Akzeptieren werden diese gesetzt. Akzeptierte Cookies können jederzeit widerrufen werden. Details im Datenschutzbereich.`}</p>
                </div>
                <div className={s.action}>
                    <button title="Cookies akzeptieren" className={`${s.button} ${s.reject}`} onClick={()=>refuse()}>Ablehnen</button>
                    <Link title="Datenschutzbereich" className={`${s.button} ${s.dsgvo}`} href="/datenschutz">Datenschutz</Link>
                    <button title="Cookies ablehnen" className={`${s.button} ${s.accept}`} onClick={()=>accept()}>Akzeptieren</button>
                </div>
            </div>
        </aside>
    )
}