import s from "../../styles/SKES.module.css"

export default function SKES({ subDirectoryList, getSubDirectoryFiles, getLinks }){

    const years = subDirectoryList.data.map(entry =>{
        return {year: entry.name, id: entry.id}
    })
    const fileNames = getSubDirectoryFiles.map(entry =>{
        return entry.data.map(item=>{
            return {name: item.name, id: item.id, parent: item.parent_id}
        })
    })

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
                                    return fileNames.map(file =>{
                                        return file.map(item=>{
                                            if(item.parent == year.id){
                                                return getLinks.map(link =>{
                                                    return link.map(x=>{
                                                        if(x.id == item.id){
                                                            return<><p>{item.name}</p><p>{x.url}</p></>
                                                    }
                                                    })
                                                    
                                                })
                                                
                                        }
                                        })
                                    })
                                }
                            })
                        }
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