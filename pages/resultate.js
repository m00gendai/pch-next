import Link from "next/link"
import s from "../styles/Resultate.module.css"
import fs from "fs"
import path from "path"

export default function Resultate(
        {   
            dir,
            current
        }
    ){

    const sortedDir = dir.sort((a,b) =>{ // sorts /Resultate/{folder} by creation date to have the newest on top
        const x = a.date
        const y = a.date
        return x < y ? 1 : x > y ? -1 : 0
    })
   
    return(
        <main className="main">
            <section className="section">
                <h1>Resultate</h1>
                {
                    sortedDir.map(item=>{
                        return (
                            <div className={s.container} key={`resultContainer_${item.name}`}>
                                <h2 key={`resultTitle_${item.name}`}>{item.name}</h2>
                                <div className={s.linkContainer} key={`linkContainer_${item}`}>
                                {
                                    current.map(entry =>{
                                        if(entry.parent == item.name){ // if the parent of the file matches the /Resultate/{folder} name
                                            const filename = entry.name.replaceAll("_", " ").replace(".pdf", "")
                                            return (
                                                <Link href={entry.url} target="_blank" className={s.link} key={`resultFile_${entry.name}`}>
                                                    <span className={s.text} key={`resultFileName_${entry.name}`}>{filename}</span>
                                                </Link>
                                            )
                                        }
                                    })
                                }
                                </div>
                            </div>
                        ) 
                    })
                }
                <hr />
                <div className={s.archiv}>
                    <span class={s.archivText}>
                        Archiv
                    </span>
                </div>
            </section>
        </main>
    )
}

export async function getServerSideProps() {

    const date = new Date()
    const currentYear = date.getFullYear()

    const directoryPath = path.join(__dirname, "/public/Resultate")
    const dir = [] // this holds all individual result folders
    const current = [] // This holds all files within the current year folder of the individual result folders

    const f = fs.readdirSync(directoryPath) // reads all directories in /Resultate

    f.forEach(file =>{
        if(fs.existsSync(`${directoryPath}/${file}/${currentYear.toString()}`)){ // checks whether a directory with the current year exists within the folder in /Resultate/{folder}
            const birth = fs.statSync(`${directoryPath}/${file}`) // gets creation date of the /Resultate/{folder} directory
            dir.push({name: file, date: JSON.stringify(birth.birthtime)}) // pushes directory name and creation date to dir array
        }
    })                
    
    dir.forEach(item =>{
        if(fs.existsSync(`${directoryPath}/${item.name}/${currentYear.toString()}`)){ // this might not even be necessary
            const g = fs.readdirSync(`${directoryPath}/${item.name}/${currentYear.toString()}`) // this checks if there are any files within the /Resultate/{folder}/{currentYear} directory
            g.forEach(file=>{ // if so, push name, parent (the /Resultate/{folder} directory name) and the file url to current array
                current.push({name: file, parent: item.name, url: `../Resultate/${item.name}/${currentYear.toString()}/${file}`})
            })
        }
    })

    return { 
        props: {
            dir,
            current
        } 
    }
}

