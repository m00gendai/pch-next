import Link from "next/link"
import Head from "next/head"
import s from "../styles/Impressum.module.css"

export default function Links(){
    return(
        <main className="main">
            <Head>
                <title>PCH Impressum</title>
                <meta name="description" content="Pistolenclub Hallau Impressum" />
                <link rel="icon" href="/pch-logo.png" />
            </Head>
            <section className="section">
                <h1>Impressum</h1>
                <div className={s.gridContainer}>
                    <div className={s.containerItem}>
                        <strong className={s.strong}>Eigentümer</strong>
                        <p>Pistolenclub Hallau</p>
                        <p>8215 Hallau</p>
                        <p>Schweiz</p>
                        <Link className={s.link} href="https://pistolenclub-hallau.ch" target="_blank">https://pistolenclub-hallau.ch</Link>
                    </div>
                    <div className={s.containerItem}>
                        <strong className={s.strong}>Webmaster</strong>
                        <p>Marcel Weber</p>
                        <p>8215 Hallau</p>
                        <p>Schweiz</p>
                        <Link className={s.link} href="https://pistolenclub-hallau.ch" target="_blank">https://pistolenclub-hallau.ch</Link>
                    </div>
                    <div className={s.containerItem}>
                        <strong className={s.strong}>Hosting Webseite</strong>
                        <p>Netlify, Inc.</p>
                        <p>44 Montgomery Street</p>
                        <p>Suite 300</p>
                        <p>San Francisco</p>
                        <p>California 94104</p>
                        <p>USA</p>
                        <Link className={s.link} href="https://www.netlify.com/" target="_blank">https://www.netlify.com/</Link>
                    </div>
                    <div className={s.containerItem}>
                        <strong className={s.strong}>Hosting Dokumente</strong>
                        <p>Infomaniak SA</p>
                        <p>25 Eugène-Marziano</p>
                        <p>1227 Les Acacias Ville de Geneve</p>
                        <p>Schweiz</p>
                        <Link className={s.link} href="https://www.infomaniak.com/de" target="_blank">https://www.infomaniak.com/de</Link>
                    </div>
                    <div className={s.containerItem}>
                        <strong className={s.strong}>Mailverkehr über</strong>
                        <p>cyon GmbH</p>
                        <p>Brunngässlein 12</p>
                        <p>4052 Basel</p>
                        <p>Schweiz</p>
                        <Link className={s.link} href="https://www.cyon.ch" target="_blank">https://www.cyon.ch</Link>
                    </div>
                </div>
                <h2>Haftungsausschluss</h2>
                    <p>
                        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, 
                        Zuverlässigkeit und Vollständigkeit der Informationen.
                        <br />
                        <br />
                        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                        welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, 
                        durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                        <br />
                        <br />
                        Alle hier bereitgestellten Informationen dienen lediglich Informationszwecken sowie Zwecken der 
                        Meinungsbildung. Eine Rechtsberatung findet nicht statt.
                        <br />
                        <br />
                        Der Pistolenclub Hallau übernimmt keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder 
                        Qualität der bereitgestellten Informationen.
                        <br />
                        <br />
                        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, 
                        Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
                        zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                    </p>
                <h2>Haftung für Links</h2>
                    <p>
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
                        Es wird jegliche Verantwortung für solche Webseiten abgelehnt. 
                        Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
                    </p>
                <h2>Urheberrechte</h2>
                    <p>
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website 
                        gehören ausschliesslich dem Pistolenclub Hallau oder den speziell genannten Rechtsinhabern. 
                        Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger 
                        im Voraus einzuholen.
                    </p>
            </section>
        </main>
    )
}