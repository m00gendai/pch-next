import Link from "next/link"
import s from "../styles/Resultate.module.css"

export default function Resultate({getFolders, getFiles, getPaths, getLinks}){

    return(
        <>
        <h1>Resultate</h1>
        {
            getFolders.map(folder => {
                return (
                    <>
                    <strong>{folder.name}<br/></strong>
                    <div className={s.resultContainer}>
                    {getFiles.map(file=>{
                        if(file.path_display.substring(0, file.path_display.lastIndexOf("/")) == folder.path_display){
                          return getLinks.map(link =>{
                            if(file.name == link.metadata.name){
                                return <Link href={link.link} className={s.result}>{file.name}</Link>
                            }
                        })
                           
                               // return <Link href={str}>{file.name}</Link>
                            
                            
                        } 
                    })}
                    </div>
                    </>
                )
            })
        }
        
        </>
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

