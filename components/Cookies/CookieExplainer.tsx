import { cookies } from "next/headers"
import s from "./CookieExplainer.module.css"
import ChapterTitle from "@/components/ChapterTitle"
import CookieDeleteButton from "./CookieDeleteButton"

export default function CookieExplainer(){

    const cookieStore = cookies()
    const websiteName: string = "pistolenclub-hallau.ch"
    const cookieName: string = "pchallau_analytics"

    return(
        <>
            <ChapterTitle title={"Cookies"} />
            <div className="chapter">
            <div className="chapter_text">
                <p dangerouslySetInnerHTML={{__html: `${websiteName} nutzt nachfolgend aufgelistete aktive Cookies. Diese können mittels <em>Cookie löschen</em> jederzeit von Hand wieder entfernt werden.`}}></p>
                {
                    cookieStore.getAll().length !== 0 ?
                    <div className={s.tableContainer}>
                        <table className={s.table}>
                            <thead>
                                <tr>
                                <th>Cookie Name</th>
                                <th>Aktion</th>
                                <th>Cookie Wert</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                cookieStore.getAll().map((cookie) => {
                                    return (
                                    <tr key={`cookietr_${cookie.name}`}>
                                        <td>{cookie.name}</td>
                                        <td>
                                            <div className={s.cookieAction}>
                                                <CookieDeleteButton cookie={cookie.name} disabled={cookie.name.startsWith("_ga") ? true : false} />
                                                <p dangerouslySetInnerHTML={{__html: cookie.name === "pchallau_analytics" ? `Löscht automatisch die Cookies <em>_ga</em> sowie <em>_ga_${process.env.NEXT_PUBLIC_GA?.split("-")[1]}</em>` : `Werden mit Löschen des Cookies <em>${cookieName}</em> mitgelöscht`}}></p>
                                            </div>
                                        </td>
                                        <td>{cookie.value}</td>
                                    </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    : 
                    <p className={s.none}>Keine aktiven Cookies</p>
                }
                <p>{`${websiteName} setzt folgende Cookies, sofern sie akzeptiert werden:`}</p>
                <div className={s.tableContainer}>
                    <table className={s.table}>
                        <thead>
                            <tr>
                            <th>Cookie Name</th>
                            <th>Voraussetzung</th>
                            <th>Cookie Wert</th>
                            <th>Erklärung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{`${cookieName}`}</td>
                            <td>Cookies akzeptiert/abgelehnt</td>
                            <td><i>true</i> oder <i>false</i></td>
                            <td>
                                {`true:\nErlaubt die Erfassung durch Google Analytics\n\nfalse:\nVerbietet die Erfassung durch Google Analytics`}
                            </td>
                            </tr>
                            <tr>
                            <td>_ga</td>
                            <td>{`${cookieName} akzeptiert`}</td>
                            <td><i>{`Beispiel:\nGA1.1.991332693.1694678232`}</i></td>
                            <td>Zufallsgenerierte Nutzer-ID für Google Analytics</td>
                            </tr>
                            <tr>
                            <td>{`_ga_${process.env.NEXT_PUBLIC_GA?.split("-")[1]}`}</td>
                            <td>{`${cookieName} akzeptiert`}</td>
                            <td><i>{`Beispiel:\nGS1.1.1694678231.1.1.1694678249.0.0.0`}</i></td>
                            <td>Zufallsgenerierte Nutzer-ID für Google Analytics</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    {`${websiteName} bezweckt mit den Cookies eine Analyse des Nutzerverhaltens.\n
                    Dies erlaubt es ${websiteName}, verschiedene Statistiken zur Akquise der Nutzer und 
                    deren Verhalten auf der Webseite einzusehen.\n
                    Dies ermöglicht es, gegebenenfalls Anpassungen am Nutzererlebnis vorzunehmen.`}
                </p>
            </div>
            </div>
        </>
    )
}