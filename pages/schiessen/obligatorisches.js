import Link from "next/link"
import Image from "next/image"
import s from "../../styles/Obligatorisches.module.css"

export default function Obli(){
    return (
        <main className="main">
            <section className="section">
                <h1>Obligatorisches</h1>
                <div className={s.introContainer}>
                    <p>
                        Auch mit der Pistole wird das Obligatorische geschossen. 
                        Sei es als aktiver Offizier in der Armee oder als Teil der Jahresmeisterschaft des Pistolenclubs. 
                        Da wir nur einen 50m-Stand haben, das Obligatorische aber offiziell nur auf 25m „anerkannt“ wird, gilt jenes auf 50m nicht für Angehörige der Armee. 
                        Daher gibt es auch keine Mindestpunktzahl, um das Obligatorische zu bestehen.
                    </p>
                </div>
                <h2>Schiessdaten</h2>
                <div className={s.container}>
                    <p>
                        <strong>Nicht vergessen mitzunehmen: </strong>
                        Aufforderungsschreiben mit den Klebeetiketten, Dienstbüchlein, Schiessbüchlein oder militärischer Leistungsausweis, amtlicher Ausweis, persönliche Dienstwaffe mit Putzzeug, persönlicher Gehörschutz.
                    </p>
                    <iframe 
                        src="https://ssv-vva.esport.ch/p2plus/ssv/schiesstageabfragerec.asp?kanton=" 
                        name="Inhalt" 
                        width="100%" 
                        height="500" 
                        frameBorder="0" 
                        marginWidth="0" 
                        marginHeight="0"
                    >
                    </iframe>
                </div>
                <h2>Programm 50m</h2>
                <div className={s.container}>
                    <p>
                        5 Schuss Einzelfeuer Scheibe P4, pro Schuss je 60 Sekunden<br />
                        5 Schuss Schnellfeuer Scheibe P4 in 60 Sekunden<br />
                        5 Schuss Einzelfeuer Scheibe B5, pro Schuss je 60 Sekunden<br />
                        5 Schuss Schnellfeuer Scheibe B5 in 30 Sekunden
                        <br />
                        <br />
                        Das Programm wird kommandiert
                    </p>
                    <div className={s.containerGrid}>
                        <Image
                            src="/50mP4.jpg"
                            alt="50m Scheibe P4"
                            width="300"
                            height="300"
                            layout="responsive"
                        >
                        </Image>
                        <p>
                            Pistolen-Kombinationsscheibe P (ein Meter in zehn und vier Kreise eingeteilt). Beim Obligatorischen wird auf die vier grossen Kreise geachtet.
                        </p>
                    </div>
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
                        5 Schuss Einzelfeuer pro Schuss, je 60 Sekunden<br />
                        5 Schuss Schnellfeuer in 50 Sekunden<br />
                        5 Schuss Schnellfeuer in 40 Sekunden<br />
                        5 Schuss Schnellfeuer in 30 Sekunden<br />
                        <br />
                        <br />
                        Das Programm wird kommandiert.<br />
                        Erfüllt bei mindestens 120 Punkten und nicht mehr als drei Nuller.
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