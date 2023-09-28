import Link from "next/link"
import Header from "../components/header"
import { useRouter } from 'next/router'
import { links } from "../lib/links"
import s from "../styles/Links.module.css"

export default function Links(){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    return(
        <main className="main">
            <Header title={"PC Hallau - Links"} content={"Links zu interessanten Seiten, relevanten Verbänden und befreundeten Vereinen"} url={headUrl} />
            <section className="section">
                <h1>Links</h1>
                <h2>Schweizer Schützensport</h2>
                <div className={s.gridContainer}>
                    {
                        links.schweiz.map(link =>{
                            return (
                                <Link key={link.name} className={s.link} href={link.url} target="_blank" title={link.name}>
                                    <div 
                                        className={s.image}
                                        style={{
                                            backgroundImage: `url("${link.logo}")`
                                        }}
                                    >
                                    </div>                  
                                    <div className={s.text}>
                                        {link.name}
                                    </div>              
                                </Link>
                            )
                        })
                    }
                </div>
                <h2>Recht & Politik</h2>
                <div className={s.gridContainer}>
                    {
                        links.recht.map(link =>{
                            return (
                                <Link key={link.name} className={s.link} href={link.url} target="_blank" title={link.name}>
                                    <div 
                                        className={s.image}
                                        style={{
                                            backgroundImage: `url("${link.logo}")`
                                        }}
                                    >
                                    </div>                  
                                    <div className={s.text}>
                                        {link.name}
                                    </div>              
                                </Link>
                            )
                        })
                    }
                </div>
                <h2>Interessensgemeinschaften & Foren</h2>
                <div className={s.gridContainer}>
                    {
                        links.forum.map(link =>{
                            return (
                                <Link key={link.name} className={s.link} href={link.url} target="_blank" title={link.name}>
                                    <div 
                                        className={s.image}
                                        style={{
                                            backgroundImage: `url("${link.logo}")`
                                        }}
                                    >
                                    </div>                  
                                    <div className={s.text}>
                                        {link.name}
                                    </div>              
                                </Link>
                            )
                        })
                    }
                </div>
                <h2>Befreundete Vereine</h2>
                <div className={s.gridContainer}>
                    {
                        links.vereine.map(link =>{
                            return (
                                <Link key={link.name} className={s.link} href={link.url} target="_blank" title={link.name}>
                                    <div 
                                        className={s.image}
                                        style={{
                                            backgroundImage: `url("${link.logo}")`
                                        }}
                                    >
                                    </div>                  
                                    <div className={s.text}>
                                        {link.name}
                                    </div>              
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}