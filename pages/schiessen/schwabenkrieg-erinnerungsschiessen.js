import Link from "next/link"
import s from "../../styles/SKES.module.css"

export default function SKES({ subDirectoryList, getSubDirectoryFiles, getLinks }){

   function handleSubmit(e){
    e.preventDefault()
   }

    const years = subDirectoryList.data.map(entry =>{
        return {year: entry.name, id: entry.id}
    })

    const fileNames = getSubDirectoryFiles.map(entry =>{
        return entry.data.map(item=>{
            return {name: item.name, id: item.id, parent: item.parent_id}
        })
    })

    const fileNamesFlat = fileNames.flat(1)
    const links = getLinks.flat(1)

    const date = new Date()
    const currentYear = date.getFullYear()

    return(
        <main className="main">
            <section className="section">
                <h1>Schwabenkrieg-Erinnerungsschiessen</h1>
                <div className={s.introContainer}>
                    <p>
                        Zur Erinnerung an den Kampf in Hallau am 04. April 1499 findet alljährlich das Schwabenkrieg-Erinnerungsschiessen statt. 
                        Mit diesem Anlass wollen die Hallauer Gewehr- und Pistolenschützen das damalige Ereignis gebührend würdigen und zugleich allen 
                        Schützen von nah und fern eine Möglichkeit zum friedlichen Wettkampf bieten.
                    </p>
                </div>
                <h2>{`Resultate ${currentYear}`}</h2>
                    <div className={s.resultContainer}>
                        {
                            years.map(year =>{
                                if(year.year.toString() == currentYear.toString()){
                                    return fileNamesFlat.map(file =>{
                                        if(file.parent == year.id){
                                            return links.map(link =>{
                                                if(link.id == file.id){
                                                    return <Link className={s.link} key={link.url} href={link.url}><span className={s.text}>{file.name}</span></Link>
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    </div>
                <h2>{`Schiesszeiten ${currentYear}`}</h2>
                    <div className={s.container}>
                        <div className={s.containerItem}>

                        </div>
                        <div className={s.containerItem}>
                            <p>Sonntag, 27. März 2022 8.30–13.00 Uhr</p>
                            <p>Samstag, 02. April 2022 8.30–12.00 / 13.15–16.00 Uhr</p>
                            <p>Sonntag, 03. April 2022 8.30–12.00 / 13.15–15.00 Uhr</p>
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
                <p>Anmeldungen sind bis zur im Schiessplan angegebenen Zeit an <u><em><a href="mailto:mrweber@gmx.ch">Marcel Weber</a></em></u> zu richten.<br />
                Je fünf Schützen eines Vereines bilden eine Gruppe.<br />
                Sollten mehr als vier Einzelschützen eines Vereines geschossen haben, werden automatisch Gruppen gebildet.<br />
                Bitte in den Anmeldungen mindestens Name/Vorname sowie Lizenznummer und ggf. Gruppenname(n) erwähnen.<br />
                Sollte eine Gruppe unvollständig sein, wird diese mit eventuellen Einzelschützen aufgefüllt.</p>
                </div>
                <h2>Informationen</h2>
                    <div className={s.container}>
                        <p>
                            <strong>Standblattausgabe</strong><br/>
                            30 Minuten vor Schiessbeginn bis 30 Minuten vor Schiessende.<br/>
                            
                            Gleichzeitig findet in der näheren Umgebung noch das Schaffhasuser Pistolenschiessen 25/50m der PS Randen Schaffhausen statt.
                        </p>
                    </div>
            </section>
        </main>
    )
}

export async function getServerSideProps(){

// SKES folder ID = 35

// Gets all subfolders in /Resultate/{folder}
    const getSubDirectoryList = await fetch(`https://api.infomaniak.com/2/drive/608492/files/35/files`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        }
    })
    const subDirectoryList = await getSubDirectoryList.json()


    const getSubDirectoryFiles = await Promise.all(subDirectoryList.data.map(async (entry) =>{
            const fetchSub = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${entry.id}/files`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type" : "application/json"
                }
            })
            const res = await fetchSub.json()
            return res
    }))

    // Gets temporary urls for each file ID in /Resultate/{folder}/{subfolder}

    const getLinks = await Promise.all(getSubDirectoryFiles.map(async (entry) =>{
        return Promise.all(entry.data.map(async file =>{
                const fetchSub = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${file.id}/temporary_url`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type" : "application/json"
                }
            })
            const res = await fetchSub.json()
            return {id: file.id, url: res.data.temporary_url}
            }))
        }))
    
        
    return { 
        props: {
            subDirectoryList,
            getSubDirectoryFiles,
            getLinks
        } 
    }
}