import Link from "next/link"
import Header from "../components/header"
import { useRouter } from 'next/router'
import s from "../styles/Anlaesse.module.css" 

export default function Anlaesse(){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    return (
        <main className="main">
            <Header title={"PC Hallau - Anlässe"} content={"Unser interner und externer Terminkalender"} url={headUrl} />
            <section className="section">
                <h1>Anlässe</h1>
                <h2>Kalender</h2>
                    <iframe className={s.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBrussels&showTitle=0&showNav=1&showCalendars=0&showTz=0&src=NmFsa2FmYjZnN2JqOWJnaWw0MzFjdmlzMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26" width="800" height="600" ></iframe>
                <h2>Besonderes</h2>
                    <ul className={s.ul}>
                        <li>
                            Trainingszeiten: Jeweils Mittwochs bis zum Einnachten. Im Sommer ab 19:00, Frühling/Herbst ab 18:00, einsehbar im Kalender.
                        </li>
                    </ul>
                <h2>Heimstiche</h2>
                    <div className={s.container}>
                        Heimstiche sind Wettberwerbe, die im heimischen Schiessstand geschossen werden können. Wir schiessen folgende Stiche:
                        <ul className={s.ul}>
                            <li>Der <strong>Heimwettkampf</strong> kann vom 01. April bis und mit 30. September 2022 geschossen werden.</li>
                            <li>Die <strong>Matchfondsstiche</strong> können vom 18. März bis und mit 30. September 2021 geschossen werden.</li>
                            <li>Der <strong>Funfzger-Stich</strong> kann vom 18. März bis und mit 11. Oktober 2022 geschossen werden.</li>
                            <li>Der <strong>Jubiläumsstich</strong> kann vom 15. März bis 30. September 2022 geschossen werden.</li>
                            <li>Für den <strong>Kantonalcup</strong> verweisen wir auf den Terminkalender der MSVS</li>
                        </ul>
                        <div className={s.linkContainer}>
                            <Link href="/3.10.04_dfi_2005.pdf" target="_blank" className={s.link}>
                                <span className={s.text}>
                                    Auszeichnungslimiten OP/FS
                                </span>
                            </Link>
                            <Link href="/84c-A-Uebersicht-Kranzlimiten-50m-SHKSV.pdf" target="_blank" className={s.link}>
                                <span className={s.text}>
                                    Kranzlimiten Pistole 50m ab 2017
                                </span>
                            </Link>
                        </div>
                    </div>
                <h2>Jahresmeisterschaft</h2>
                    <div className={s.container}>
                        Jedes Jahr küren wir den besten Hallauer Pistolenschützen. Die Bestresultate der folgenden Stiche 2022 zählen nun zur Jahreswertung:
                        <ul>
                            <li>Schwabenkrieg-Erinnerungsschiessen</li>
                            <li>Feldschiessen (umgerechnet auf 25m wenn auf 50m geschossen)</li>
                            <li>Bundesprogramm 50m</li>
                            <li>Heimwettkampf</li>
                            <li>Matchfonds – Jeweils höchste Passe auf die P- und B-Scheibe</li>
                            <li>Fufzgerstich, höchste Passe (ehemals Goldstich)</li>
                            <li>Endstich – Ist bei Verhinderung am Endschiessen vorzuschiessen</li>
                        </ul>
                        Die aktuelle Rangliste der Jahresmeisterschaft hängt im Schiessstand aus.
                    </div>
            </section>
        </main>
    )
}