import Link from "next/link"
import s from "../styles/Resultate.module.css"

export default function Resultate(
    {   
        sourceDirectoryList, 
        getSubDirectoryList, 
        getSubDirectoryFiles, 
        getLinks
    }
){

    const linksFlat = getLinks.flat(3)
    const linkList = linksFlat.map(link =>{
        return {id: link.id, url: link.url.data.temporary_url}
    })

    const shootings = sourceDirectoryList.data.map(name =>{
        return {id: name.id, name: name.name}
    })

    const years = getSubDirectoryList.map(entry =>{
        return entry.data.map(data =>{
            return {id: data.id, name: data.name, parent: data.parent_id}
        })
    })

    const files = getSubDirectoryFiles.map(directory =>{
        return directory.map(entry =>{
            return entry.data.map(data =>{
                return {id: data.id, name: data.name, parent: data.parent_id}
            })
        })
    })
    const fileArray = files.flat(3)

    return(
        <main className="main">
            <section className="section">
                <h1>Resultate</h1>
                {
                shootings.map((shooting, index) =>{
                    return (
                        <div className={s.container} key={`container_${index}`}>
                        <h2 key={`shooting_${index}`}>{shooting.name}</h2>
                        {
                        years.map(year =>{
                            return year.map((data,indexYear)=>{
                                if(data.parent == shooting.id){
                                    return (
                                        <details className={s.spoiler} key={`year_${indexYear}`}>
                                            <summary className={s.summary} key={`summary_${index}`}>{data.name}</summary>
                                            <div className={s.resultContainer} key={`container_${index}`}>
                                            {
                                            fileArray.map(file =>{
                                                if(file.parent == data.id){
                                                    return linkList.map(link =>{
                                                        if(link.id == file.id){
                                                            const name = file.name.replaceAll("_", " ").replaceAll("-", " ").replace(".pdf", "")
                                                            return <Link href={link.url} className={s.result} key={`link_${index}`}><span className={s.text} key={`span_${index}`}>{name}</span></Link>
                                                        }
                                                    })
                                                }
                                            })
                                            }
                                            </div>
                                        </details>
                                    )
                                }
                            })
                        })
                        }
                        </div>
                    )
                })
                }
            </section>
        </main>
    )
}

export async function getServerSideProps() {

    // Gets folders in /Resultate
    const getSourceDirectoryList = await fetch("https://api.infomaniak.com/2/drive/608492/files/15/files", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.KDRIVE}`,
            "Content-Type" : "application/json"
        }
    })
    const sourceDirectoryList = await getSourceDirectoryList.json()

    // Gets all subfolders in /Resultate/{folder}
    const getSubDirectoryList = await Promise.all(sourceDirectoryList.data.map(async (directory) =>{
        const fetchSub = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${directory.id}/files`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type" : "application/json"
            }
        })
       return fetchSub.json()
    }))

    // Gets all files in /Resultate/{folder}/{subfolder}
    const getSubDirectoryEntries = getSubDirectoryList.map(entry =>{
        return entry.data
    })

    const getSubDirectoryFiles = await Promise.all(getSubDirectoryEntries.map(async (entry) =>{
        return Promise.all(entry.map(async file =>{
            const fetchSub = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${file.id}/files`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type" : "application/json"
                }
            })
            const res = await fetchSub.json()
            return res
        }))
    }))

    // Gets temporary urls for each file ID in /Resultate/{folder}/{subfolder}

    const getLinks = await Promise.all(getSubDirectoryFiles.map(async (entry) =>{
        return Promise.all(entry.map(async file =>{
            return Promise.all(file.data.map(async dat =>{
                const fetchSub = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${dat.id}/temporary_url`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type" : "application/json"
                }
            })
            const res = await fetchSub.json()
            return {id: dat.id, url: res}
            }))
        }))
    }))
        
    return { 
        props: {
            sourceDirectoryList, 
            getSubDirectoryList, 
            getSubDirectoryFiles, 
            getLinks 
        } 
    }
}

