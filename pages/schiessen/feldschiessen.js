import Link from "next/link"
import Image from "next/image"
import s from "../../styles/Feldschiessen.module.css"

export default function FS(){

    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <main className="main">
            <section className="section">
                <h1>Feldschiessen</h1>
                <div className={s.introContainer}>
                    <p>
                        Mitmachen kann jeder, der das zehnte Altersjahr erreicht hat – das heisst, im Jahre {currentYear} dürfen bereits
                        junge Schützen, die im Jahre {currentYear-10} geboren sind, teilnehmen.
                        <br />
                        <br /> 
                        Dabei macht es keinen Unterschied, ob man das Licht der Welt am ersten Januar oder am 31. Dezember erblickt hat, 
                        es zählt der Jahrgang. 
                        <br />
                        <br />
                        Eine Zugehörigkeit in einem Verein oder eine Lizenz des SSV ist nicht notwendig. Die Teilnahme ist gratis – 
                        dies beinhaltet auch die Munition.
                    </p>
                </div>
                <h2>Resultate {currentYear}</h2>
                <h2>Feldschiessen {currentYear}</h2>
                <div className={s.container}>
                    <p>
                        Zeiten und Orte werden noch bekannt gegeben
                    </p>
                </div>
                <h2>Programm 50m</h2>
                <div className={s.container}>
                    <p>
                        6 Schuss Einzelfeuer, je 60 Sekunden pro Schuss (oder 6 Schuss, einzeln gezeigt, innert 6 Minuten)<br />
                        3 Schuss Kurzfeuer, in je 60 Sekunden<br />
                        3 Schuss Kurzfeuer, in je 60 Sekunden<br />
                        6 Schuss Schnellfeuer in 60 Sekunden<br />
                        <br />
                        <br />
                        Das Programm wird kommandiert
                    </p>
                    <div className={s.containerGrid}>
                        <Image
                            src="/50mB5.jpg"
                            alt="50m Scheibe B5"
                            width="300"
                            height="300"
                            layout="responsive"
                        >
                        </Image>
                        <p>
                            Pistolen-Kombinationsscheibe B (ein Meter in zehn Kreise resp. fünf Zonen eingeteilt). Beim Obligatorischen wird auf die vier Zonen geachtet.
                        </p>
                    </div>
                </div>
                <h2>Programm 25m</h2>
                <div className={s.container}>
                    <p>
                        3 Schuss Einzelfeuer in je 20 Sekunden<br />
                        5 Schuss in 50 Sekunden<br />
                        5 Schuss in 40 Sekunden<br />
                        5 Schuss in 30 Sekunden<br />
                        <br />
                        <br />
                        Das Programm wird kommandiert.<br />
                    </p>
                    <div className={s.containerGrid}>
                        <Image
                            src="/25mO.jpg"
                            alt="25m Ordonnanzscheibe"
                            width="300"
                            height="163"
                            layout="responsive"
                        >
                        </Image>
                        <p>
                            Ordonnanz-Schnellfeuer-Pistolenscheibe (rechteckig, schwarz, 76 x 45 cm, mit Wertungszonen 6 bis 10).
                        </p>
                    </div>
                </div>
                <h2>Dokumente</h2>
                <div className={s.resultContainer}>
                    <Link className={s.link} href="/3.10.04_dfi_2005.pdf" target="_blank">Auszeichnungslimiten OP/FS</Link>
                    <Link className={s.link} href="/4_02_01_d_Kommandos_Ablaeufe_PistolenWK_2010.pdf" target="_blank">Abläufe Pistolenwettkämpfe</Link>
                    <Link className={s.link} href="/512.311.pdf" target="_blank">Verordnung des VBS über das Schiesswesen ausser Dienst</Link>
                </div>
            </section>
        </main>
    )
}