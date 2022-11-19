import Link from "next/link"
import s from "../styles/navbar.module.css"

export default function Navbar(){
    return(
        <nav className ={s.nav}>
            <div className={s.linkContainer}>
                <Link className={s.link} href="/">Home</Link>
                <Link className={s.link} href="/">Anlässe</Link>
                <Link className={s.link} href="/resultate">Resultate</Link>
                <Link className={s.link} href="/">Schiessen</Link>
                <Link className={s.link} href="/">Verein</Link>
                <Link className={s.link} href="/">Links</Link>
            </div>
        </nav>
    )
}