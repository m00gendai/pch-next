import Link from "next/link"
import Header from "../../components/header"
import { useRouter } from 'next/router'
import s from "../../styles/Hilfsmittel.module.css"

export default function Hilfsmittel(){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    return (
        <main className="main">
            <Header title={"PC Hallau - Zugelassene Hilfsmittel und Pistolen"} content={"Informationen zu den von uns verwendeten Waffen und deren Zubehör"} url={headUrl} />
            <section className="section">
                <h1>Zugelassene Pistolen und Hilfsmittel</h1>
                <h2>Generelles</h2>
                    <div className={s.introContainer}>
                        <p>
                            Generell dürfen nur die Pistolen und Hilfsmittel verwendet werden, die offiziell zugelassen sind.<br />
                            Bei Ordonnanzpistolen regelt dies das Verzeichnis der bewilligten Hilfsmittel zu Ordonnanzwaffen und zu den Bundesübungen zugelassenen Waffen, die Sportpistolen unterstehen den Regeln der ISSF.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className={s.resultContainer}>
                        <Link className="link" href="/27_132_dfi_2022.pdf" target="_blank">Hilfsmittelverzeichnis</Link>
                        <Link className="link" href="https://schussfreude.ch/welche-waffe-fuers-sportschiessen-teil-2-50-25m-pistole-einstieg/" target="_blank">Welche Waffe fürs Sportschiessen Teil 2: 50/25m Pistole Einstieg</Link>
                        <Link className="link" href="https://schussfreude.ch/welche-waffe-fuers-sportschiessen-teil-2-pistole-50-25m-ordonnanz-2022/" target="_blank">Welche Waffe fürs Sportschiessen Teil 2: Pistole 50/25m Ordonnanz ab 2022</Link>
                        <Link className="link" href="https://schussfreude.ch/welche-waffe-fuers-sportschiessen-teil-3-50-25m-pistole-sportpistolen/" target="_blank">Welche Waffe fürs Sportschiessen Teil 2: 50/25m Pistole Sportpistolen</Link>
                    </div>
                <h2>Reglemente</h2>
                    <p>
                        Auf der Webseite des <u><em><Link href="https://www.swissshooting.ch/de/schiesssport/breitensport/reglemente/" target="_blank">Schweizerischen Schiesssportverbandes SSV</Link></em></u> sowie dem <u><em><Link href="https://www.vtg.admin.ch/de/mein-militaerdienst/ausserhalb-des-dienstes/sat/schiesswesen-ausser-dienst.html#ui-tab-181" target="_blank">Schiesswesen ausser Dienst SAT</Link></em></u> sind sämtliche relevante Dokumente und Reglemente aufgeschaltet.
                    </p>
            </section>
        </main>
    )
}