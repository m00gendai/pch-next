import Link from "next/link"
import Head from "next/head"
import s from "../../styles/SKES.module.css"
import { shootTimes } from "../../lib/shootTimes"

export default function SKES(
    { 
        sourceDirectoryList,
        links,
        SKESfileNames,
        SKESlinks
    }
){

    const date = new Date()
    const currentYear = date.getFullYear()

    const results = sourceDirectoryList.data

    const currentYearDirs = results.filter(result =>{ // This filters for all directories of the current year
        return result.name == currentYear.toString()
    })

    const currentYearDirIds = currentYearDirs.map(item=>{ // this extracts the parent_id of the current year directories
        return item.parent_id
    })

    function getFile(id){
        const url = links.data.filter(link=>{
            return link.id == id        
        })
        window.open(url[0].temporary_url, "_blank")
    }

    function getSKESfile(link){
        window.open(link.temporary_url, "_blank")
    }

    return(
        <main className="main">
            <Head>
                <title>PCH SKES</title>
                <meta name="description" content="Pistolenclub Hallau Schwabenkrieg-Erinnerungsschiessen SKES" />
                <link rel="icon" href="/pch-logo.png" />
            </Head>
            <section className="section">
                <h1>Schwaben<wbr/>krieg-Erinnerungs<wbr/>schiessen</h1>
                <div className={s.introContainer}>
                    <p>
                        Zur Erinnerung an den Kampf in Hallau am 04. April 1499 findet alljährlich das Schwabenkrieg-Erinnerungsschiessen statt. 
                        Mit diesem Anlass wollen die Hallauer Gewehr- und Pistolenschützen das damalige Ereignis gebührend würdigen und zugleich allen 
                        Schützen von nah und fern eine Möglichkeit zum friedlichen Wettkampf bieten.
                    </p>
                </div>
                {/* if there is no current year folder, amend the title accoringly */}
                <h2>{`Resultate ${currentYear}${currentYearDirs.length == 0 ? " noch nicht vorhanden" : ""}`}</h2>
                    <div className={s.resultContainer}>
                        {
                            results.map(result=>{
                                if(result.type == "dir" && result.name == currentYear.toString()){
                                    return results.map(result2 =>{
                                        if(result2.type == "file" && result2.parent_id == result.id){
                                            const name = result2.name.replaceAll("_", " ").replace(".pdf", "")
                                            return <div key={`SKESresult_${result2.id}`} className={s.link} onClick={()=>getFile(result2.id)}>{name}</div>
                                        }
                                    })
                                }
                            }) 
                        }
                    </div>
                <h2>{`Schiesszeiten 2023`}</h2>
                    <div className={s.gridContainer}>
                        <div className={s.containerItem}>
                            {
                                SKESlinks.data.map(link=>{
                                    return <div key={`Skesfile_${link.id}`} className={s.link} onClick={()=>getSKESfile(link)}>{SKESfileNames[0]}</div>
                                })
                            }
                        </div>
                        <div className={s.containerItem}>
                            {
                                shootTimes.skes.map((item, index) =>{
                                    return <p key={`skestime_${index}`}>{item.time}</p>
                                })
                            }
                        </div>
                    </div>
                <h2>Wettkampfprogramm Pistole 50m</h2>
                    <div className={s.container}>
                        <div className={s.containerItem}>
                            <strong>Gruppenwettkampf Scheibe B10</strong>
                            <p>2 Probeschüsse / 4 Schüsse Einzelfeuer in total 6 Minuten</p>
                            <p>3 Schüsse in 40 Sekunden</p>
                            <p>3 Schüsse in 30 Sekunden</p>
                        </div>
                        <div className={s.containerItem}>
                            <p>Fr. 18.- (RF, ohne Munition)</p>
                            <p>Fr. 22.- (OP, inkl. Munition)</p>
                            <p>Junioren erhalten eine Ermässigung von Fr. 5.-</p>
                        </div>
                    </div>
                    <div className={s.container}>
                        <p>
                            Das Programm wird kommandiert<br/>
                            {`Es gilt das aktuelle Hilfsmittelverzeichnis ${currentYear} und entsprechend die neu zugelassenen Pistolen!`}
                        </p>
                    </div>
                <h2>Anmeldung Gruppen</h2>
                <div className={s.container}>
                <p>Anmeldungen sind bis zur im Schiessplan angegebenen Zeit an <u><em><Link href="mailto:mrweber@gmx.ch">Marcel Weber</Link></em></u> zu richten.
                <br />
                <br />
                Je fünf Schützen eines Vereines bilden eine Gruppe.<br />
                Sollten mehr als vier Einzelschützen eines Vereines geschossen haben, werden automatisch Gruppen gebildet.
                <br />
                <br />
                Bitte in den Anmeldungen mindestens Name/Vorname sowie Lizenznummer und ggf. Gruppenname(n) erwähnen.
                <br />
                <br />
                Sollte eine Gruppe unvollständig sein, wird diese mit eventuellen Einzelschützen aufgefüllt.</p>
                </div>
                <h2>Informationen</h2>
                    <div className={s.container}>
                        <p>
                            <strong>Standblattausgabe</strong><br/>
                            30 Minuten vor Schiessbeginn bis 30 Minuten vor Schiessende.
                            <br/>
                            <br />
                            <strong>Weitere Schiessen</strong><br />
                            Gleichzeitig findet in der näheren Umgebung noch das <u><em><Link href="https://www.psranden.ch/schaffhauser-pistolenschiessen/" target="_blank">Schaffhauser Pistolenschiessen 25/50m der PS Randen Schaffhausen</Link></em></u> statt.
                        </p>
                    </div>
            </section>
        </main>
    )
}

export async function getStaticProps(){

// SKES folder ID = 35

// Gets all folders and files in the /Resultate directory recursively, sorted by last modified
    const getSourceDirectoryList = await fetch("https://api.infomaniak.com/2/drive/608492/files/search?directory_id=35&depth=unlimited&per_page=1000&order_by=last_modified_at", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        },

    })
    const sourceDirectoryList = await getSourceDirectoryList.json()

    const files = sourceDirectoryList.data.filter(item=>{ // filters for files only
        return item.type == "file"
    })

    const fileIds = files.map(file =>{ // gets the file ids
        return file.id
    })

    // Gets temporary urls for all file ids
    const getLinks = await fetch("https://api.infomaniak.com/2/drive/608492/files/temporary_urls", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
                "ids": fileIds
            }
        ),
    })
    const links = await getLinks.json()

    const getSKESfiles = await fetch("https://api.infomaniak.com/2/drive/608492/files/433/files", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        },

    })
    const SKESfiles = await getSKESfiles.json()
    const SKESfileIds = SKESfiles.data.map(file=>{
        return file.id
    })
    const SKESfileNames = SKESfiles.data.map(file=>{
        return file.name
    })
    const getSKESlinks = await fetch("https://api.infomaniak.com/2/drive/608492/files/temporary_urls", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
                "ids": SKESfileIds
            }
        ),
    })
    const SKESlinks = await getSKESlinks.json()
    
        
    return { 
        props: {
            sourceDirectoryList,
            links,
            SKESfileNames,
            SKESlinks
        }, revalidate: 2
    }
}