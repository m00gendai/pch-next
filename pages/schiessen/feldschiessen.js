import Link from "next/link"
import Image from "next/image"
import Header from "../../components/header"
import { useRouter } from 'next/router'
import { fsTimes } from "../../lib/fsInfo"
import s from "../../styles/Feldschiessen.module.css"
import getFile from "../../functions/getFile"

export default function FS(
    { 
        sourceDirectoryList,
        setShow
    }
){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    const date = new Date()
    const currentYear = date.getFullYear()

    const results = sourceDirectoryList.data

    const containsCurrentYear = results.filter(result =>{
        return result.name == currentYear.toString() && result.type == "dir"
    })

    const currentYearDirs = results.filter(result =>{ // This filters for all directories of the current year
        return result.name == currentYear.toString()
    })

    const currentYearDirIds = currentYearDirs.map(item=>{ // this extracts the parent_id of the current year directories
        return item.parent_id
    })

    function renderMap(place){
        switch(place){
            case "Neunkirch":
                return (
                    <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5630.899465882173!2d8.493181576693809!3d47.67763207994218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47907b4c174e6b41%3A0xb6068ef6947cbe55!2sPistolenstand%20Horn!5e1!3m2!1sen!2sch!4v1670495150749!5m2!1sen!2sch"></iframe>
                )
                break
            case "Neuhausen":
                return (
                    <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2109.3356584343683!2d8.58849526125184!3d47.674377609921684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479078d6ab0a6bbd%3A0xc60b5fb3f18dfd2!2sLangrietstrasse%20100%2C%208212%20Neuhausen%20am%20Rheinfall!5e1!3m2!1sen!2sch!4v1670495270414!5m2!1sen!2sch" ></iframe>
                )
                break
            case "Thayngen":
                return (
                    <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8427.179335458155!2d8.692212667270152!3d47.737202686941124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a8062691581f9%3A0xb68b87b669b35eb8!2sSchie%C3%9Fstand%20Weiher!5e1!3m2!1sen!2sch!4v1677770885915!5m2!1sen!2sch" ></iframe>
                )
                break
        }
    }

    return (
        <main className="main">
            <Header title={"PC Hallau - Feldschiessen"} content={"Alle Informationen rund ums Feldschiessen - dem grössten Schützenfest der Welt - in Schaffhausen"} url={headUrl} />
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
                {containsCurrentYear.length != 0 ?
                    <div className={s.resultContainer}>
                        {
                            results.map(result=>{
                                if(result.type == "dir" && result.name == currentYear.toString()){
                                    return results.map(result2 =>{
                                        if(result2.type == "file" && result2.parent_id == result.id){
                                            const name = result2.name.replaceAll("_", " ").replace(".pdf", "")
                                            return <div key={`FSresult${result2.id}`} className="link" onClick={()=>getFile(result2.id, setShow)}>{name}</div>
                                        }
                                    })
                                } 
                            }) 
                        }
                    </div>
                    :
                    <p>Das Feldschiessen fand dieses Jahr noch nicht statt oder die Resultate sind noch nicht verfügbar.</p>
                }
                <h2>Feldschiessen {currentYear}</h2>
                <div className={s.container}>
                    {fsTimes.year == currentYear ? 
                        <p>Gruppenplatz für den Kreis Unterklettgau ist dieses Jahr {fsTimes.name}.</p>
                    :
                        null
                    }
                    {fsTimes.year == currentYear ?
                    <>
                        <p>Schiesszeiten:</p>
                        <p>
                            {fsTimes.times.map(item=>{
                                return <>{item.date} {item.time} <br /></>
                            })}
                        </p>
                        <p>Weitere Zeiten & Orte sind beim <u><em><Link href={`https://sh-schiessen.ch/anlass/eidg-feldschiessen-${currentYear}/`} target="_blank">SH KSV</Link></em></u> gelistet.</p>
                    </>
                    :
                        <p>Zeiten & Ort noch nicht bekannt</p>
                    }
                    {fsTimes.year == currentYear ?
                        renderMap(fsTimes.name)
                    :
                    null
                    }
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
                    <Link className="link" href="/3.10.04_dfi_2005.pdf" target="_blank">Auszeichnungslimiten OP/FS</Link>
                    <Link className="link" href="/4_02_01_d_Kommandos_Ablaeufe_PistolenWK_2010.pdf" target="_blank">Abläufe Pistolenwettkämpfe</Link>
                    <Link className="link" href="/512.311.pdf" target="_blank">Verordnung des VBS über das Schiesswesen ausser Dienst</Link>
                </div>
            </section>
        </main>
    )
}

export async function getStaticProps(){

// Feldschiessen folder ID = 414

// Gets all folders and files in the /Resultate directory recursively, sorted by last modified
    const getSourceDirectoryList = await fetch("https://api.infomaniak.com/2/drive/608492/files/search?directory_id=414&depth=unlimited&per_page=1000&order_by=last_modified_at", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        },

    })
    const sourceDirectoryList = await getSourceDirectoryList.json()

    return { 
        props: {
            sourceDirectoryList
        }, revalidate: 2
    }
}