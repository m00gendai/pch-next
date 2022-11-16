import Link from "next/link"
import s from "../styles/Resultate.module.css"

export default function Resultate({getFolders, getFiles, getPaths, getLinks}){

    const sortedFolders = getFolders.sort((a,b) =>{
        return a<b ? 1 : a>b ? -1 : 0
    })

    return(
        <main>
            <section>
        <h1>Resultate</h1>
        {
            sortedFolders.map((folder, index) => {
                if(index > 0){
                    return (
                        <>
                        {
                            folder.name.match(/[0-9]{4}/)
                            ?
                            <details className={s.spoiler}>
                                <summary className={s.summary}>{folder.name}</summary>
                                <div className={s.resultContainer}>
                                    {
                                        getFiles.map(file=>{
                                            if(file.path_display.substring(0, file.path_display.lastIndexOf("/")) == folder.path_display){
                                                return getLinks.map(link =>{
                                                    if(file.name == link.metadata.name){
                                                        const name = file.name.replaceAll("_", " ").replaceAll("-", " ").replace(".pdf", "")
                                                        return <Link href={link.link} className={s.result}><span className={s.text}>{name}</span></Link>
                                                    }
                                                })
                                            } 
                                        })
                                    }
                                </div>
                            </details>
                            :
                            <h2 className={s.h2}>{folder.name}</h2> 
                        }
                        </>
                    )
                }
            })
        }
        </section>
        </main>
    )
}

export async function getServerSideProps() {
    const data = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
        method : "POST",
        headers: {
            Authorization : `Bearer ${process.env.DROPBOX}`,
            'Content-Type' : "application/json; charset=utf-8"
        },
        body: JSON.stringify({path: "/Resultate", recursive: true})
    })
    
    const res = await data.json()

    const getFolders = res.entries.filter((item, index)=>{
        if(item[".tag"] == "folder"){
            return item
        }
    })

    const getFiles = res.entries.filter((item, index) =>{
        if(item[".tag"] == "file"){
            return item
        }
    })

    const getPaths = getFiles.map(file=>{
        return file.path_display
    })
   
    const getLinks = await Promise.all(getPaths.map(async (getPath) => {
        const data = await fetch("https://api.dropboxapi.com/2/files/get_temporary_link", {
            method : "POST",
            headers: {
                Authorization : `Bearer ${process.env.DROPBOX}`,
                'Content-Type' : "application/json; charset=utf-8"
            },
            body: JSON.stringify({path: getPath})
        })

        const res = await data.json()
        return res
    }))

    
    return { props: { getFolders, getFiles, getPaths, getLinks } }
}

