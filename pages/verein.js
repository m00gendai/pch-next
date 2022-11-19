import Link from "next/link"
import s from "../styles/Verein.module.css"
import { vorstand } from "../lib/vorstand"

export default function Verein(){
    return(
        <main className="main">
            <section className="section">
                <h1>Verein</h1>
                <h2>Über uns</h2>
                    <div className={s.container}>
                        <p>
                            An der Hauptversammlung kurz vor Weihnachten 1984 wurden die Statuten des Pistolenclub Hallau genehmigt, 
                            somit kann dies als Geburtsstunde unseres Vereines angesehen werden. 
                            Davor waren wir als Hallauer Pistolen- und Revolversektion bekannt.
                        </p>
                        <p>
                            Im Jahre 2022 zählt unser Verein 21 Aktive Mitglieder, sowie fünf B- und sieben Passivmitglieder, von Jahrgang 1940 bis 2003.
                        </p>
                    </div>
                    <div className={s.linkContainer}>
                        <Link href="/" className={s.link}>
                            <span className={s.text}>
                                Mitmachen!
                            </span>
                        </Link>
                        <Link href="/" className={s.link}>
                            <span className={s.text}>
                                Vereinsstatuten
                            </span>
                        </Link>
                    </div>
                    <div className={s.imageContainer}>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_1.jpg"}`
                        }}></div>
                       <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_2.jpg"}`
                        }}></div>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_3.jpg"}`
                        }}></div>
                    </div>
                <h2>Standort</h2>
                    <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33736.67947464168!2d8.407849476536148!3d47.69399698993076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906354ca4a1cff%3A0x536015ac331fdba8!2sSchiessanlage%20Waatelen!5e1!3m2!1sen!2sch!4v1668826709576!5m2!1sen!2sch" />
                <h2>Vorstand</h2>
                    <div className={s.vorstandContainer}>
                        {
                        vorstand.map((entry, index) =>{
                            return(
                                <div
                                    className={s.vorstand} 
                                    key={`vorstand_${index}`}
                                >
                                    <span className={s.vorstandTitle}>{entry.title}</span>
                                    <span className={s.vorstandText}>{entry.name}</span>
                                    <span className={s.vorstandText}>{entry.addn}</span>
                                </div>

                            )
                        })
                        }
                    </div>
                <h2>Kontaktformular</h2>
            </section>
        </main>
    )
}