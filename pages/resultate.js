import Link from "next/link"
import Header from "../components/header"
import { useRouter } from 'next/router'
import s from "../styles/Resultate.module.css"

export default function Resultate(
    {   
        sourceDirectoryList, 
        links
    }
){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    const date = new Date()
    const currentYear = date.getFullYear()

    const results = sourceDirectoryList.data.sort((a,b) =>{
        const x = a.added_at
        const y = b.added_at
        return x < y ? 1 : x > y ? -1 : 0
    })

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

    return(
        <main className="main">
            <Header title={"PC Hallau - Resultate"} content={"Diesjährige Resultate und Ranglisten der Schützen vom Pistolenclub Hallau"} url={headUrl} />
            <section className="section">
                <h1>Resultate</h1>
                <div className={s.introContainer}>
                    <p>
                        Hier sind alle Resultate der auswärtigen Schiessen für das aktuelle Jahr <span>{`${currentYear}`}</span> aufgelistet.
                        Ältere Resultate vergangener Jahre finden sich im Archiv am Ende der Seite.
                        Die Resultate sind nach Aktualität geordnet.
                    </p>
                </div>
                {
                    currentYearDirs.length == 0 // if there are no folders with the current year at all, render placeholder
                    ?
                    <h2>{`${currentYear} ist noch nichts gelaufen...`}</h2>
                    :
                    results.map(result =>{
                        if(result.type == "dir" && isNaN(parseInt(result.name)) && currentYearDirIds.includes(result.id)){ 
                        /* If directory AND the directory name is not a number AND there is a subdirectory with the name of the current 
                            year present (see parent_id filtering above) */
                            return (
                                <div className={s.container} key={`fragment_${result.id}`}>
                                    <h2 key={`resultTitle_${result.name}`}>{result.name}</h2> {/* only displayed if there is something for the current year */}
                                    <div key={`linkContainer_${result.name}`} className={s.linkContainer}>
                                    {
                                        results.map(result2 =>{
                                            if(result2.type == "dir" && result2.name == currentYear.toString() && result2.parent_id == result.id){
                                                return results.map(result3 =>{
                                                    if(result3.type == "file" && result3.parent_id == result2.id){
                                                        const name = result3.name.replaceAll("_", " ").replace(".pdf", "")
                                                        return (
                                                            <div key={`result_${result3.id}`} className="link" onClick={()=>getFile(result3.id)}>
                                                                <div className={s.text}>
                                                                    {name}
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        })
                                    }
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <hr />
                <Link className={s.archiv} href={`https://kdrive.infomaniak.com/app/share/608492/e3b365ba-9347-441c-ac26-ad9a9d6c72c5`} target={"_blank"}>
                    <span className={s.archivText}>
                        Archiv
                    </span>
                </Link>
            </section>
        </main>
    )
}

export async function getStaticProps() {

    // Gets all folders and files in the /Resultate directory recursively, sorted by last modified
    const getSourceDirectoryList = await fetch("https://api.infomaniak.com/2/drive/608492/files/search?directory_id=15&depth=unlimited&per_page=1000", {
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

    return { 
        props: {
            sourceDirectoryList, 
            links
        } , 
            revalidate: 2
    }
}
