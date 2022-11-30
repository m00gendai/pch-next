import Link from "next/link"
import s from "../styles/Mitmachen.module.css"

export default function Verein(){
    return(
        <main className="main">
            <section className="section">
                <h1>Mitmachen</h1>
                    <div className={s.introContainer}>
                        <p>
                            Interessiert, auch mal den Abzug einer Pistole zu betätigen? 
                            In ein neues Hobby eintauchen? Neu im Dorf und Anschluss gesucht?
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/mitmachen_1.jpg"})`
                        }}>
                        </div>
                        <p>
                            Unsere Trainings sind jeweils Mittwochs ab 18:00 Uhr in der Schiessanlage Waatelen in Hallau, 
                            von Mitte März bis Ende September. 
                            Die kalten Wintermonate überbrücken wir mit Luftpistolenschiessen im selben Schiessstand, 
                            aber in beheizten Räumen. 
                            Übers Jahr verteilt besuchen wir einige auswertige Schiessanlässe und führen über Ostern auch unseren 
                            eigenen Anlass – das Schwabenkrieg-Erinnerungsschiessen – mit den 300m-Schützen gemeinsam durch. 
                            Im Sommer wird gerne auf dem standeigenen Grill das Fleisch gewendet (und verzehrt), 
                            damit auch die Geselligkeit nicht zu kurz kommt.
                            <br />
                            <br />
                            Wir haben unter uns auch Waffensammler, Jäger und Schützen anderer Disziplinen als diejenigen des 
                            Schweizer Schiesssportverbandes. So besuchen wir auch Revolver-, 45er- und 
                            Unterhebelrepetiererschiessen.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <p>
                            Wenn ihr uns und unseren Sport kennen lernen möchtet, 
                            so kommt am einfachsten an einem unserer Trainings vorbei – dies kann auch unangemeldet sein. 
                            Ihr könnt auch vorgängig mit einem unserer Vorstandsmitglieder Kontakt aufnehmen. 
                            Man benötigt auch keine eigene Pistole. 
                            Unsere Vereinsmitglieder werden euch gerne verschiedenste Modelle zum Ausprobieren zeigen und euch 
                            ausführlich beraten. 
                            Solltet ihr bereits eine Pistole besitzen, könnt ihr diese natürlich gerne mitnehmen. 
                            Munition (9mm und .22lr) kann im Stand bezogen werden.
                        </p>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/mitmachen_2.jpg"})`
                        }}>
                        </div>
                    </div>
                    <div className={s.image} style={{
                        width: "100%",
                        aspectRatio: "16/7",
                        margin: "2rem 0 0 0",
                        backgroundImage: `url(${"/pistolen.jpg"})`
                    }}>
                    </div>
                <h2>Rechtliches</h2>
                    <p>
                        Grundsätzlich darf jeder Schweizer Bürger ab dem 10. Altersjahr mit der Pistole schiessen, 
                        sofern die waffenrechtlichen Anforderungen erfüllt sind und bei Minderjährigen die Zustimmung 
                        eines Erziehungsberechtigten vorliegt. 
                        Für ausländische Staatsangehörige, welche nicht im Waffengesetz aufgeführt sind, 
                        gelten die Bestimmungen des SSV.
                    </p>
                    <ul>
                        <li>
                            <u><em><Link href="https://www.swissshooting.ch/media/4670/2_18_03_d_afb_schiessen_js_junioren_2017.pdf" target="_blank">Ausführungsbestimmungen für das Schiessen von Jugendlichen</Link></em></u>
                        </li>
                        <li>
                            <u><em><Link href="https://www.swissshooting.ch/media/19528/2_18_01_d_afb-auslaender_2021.pdf" target="_blank">Ausführungsbestimmungen für die Teilnahmeberechtigung von ausländischen Staatsangehörigen an Bundesübungen, Schiessanlässen und Trainings des Schweizer Schiesssportverbandes</Link></em></u>
                        </li>
                        <li>
                            <u><em><Link href="https://www.fedlex.admin.ch/eli/cc/2008/767/de#a12" target="_blank">Verordnung über Waffen, Waffenzubehör und Munition, Verbot für Angehörige bestimmter Staaten</Link></em></u>
                        </li>
                    </ul>
            </section>
        </main>
    )
}