import Link from "next/link"
import Head from "next/head"
import { links } from "../lib/links"
import s from "../styles/Links.module.css"

export default function Links(){
    return(
        <main className="main">
            <Head>
                <title>PCH Links</title>
                <meta name="description" content="Pistolenclub Hallau Links" />
                <link rel="icon" href="/pch-logo.png" />
            </Head>
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
                <h2>Andere Vereine</h2>
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