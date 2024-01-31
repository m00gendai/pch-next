import Link from "next/link";
import s from "@/styles/Resultate.module.css"
import LinkButton from "@/components/LinkButton"
import { Directory, DirectoryResponse, FileResponse } from "../../interfaces"

async function getDirs(){
    const date:Date = new Date();
    const currentYear:number = date.getFullYear();

    // searches all folders with {currentYear} as directory name and includes the directory path (to extract the parent directory name easier)
    const getYearDirectoryList:Response = await fetch(
        `https://api.infomaniak.com/2/drive/608492/files/search?with=path&directory_id=15&depth=unlimited&types[]=dir&query="${currentYear}"&per_page=1000`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type": "application/json",
            },
        }
    );
    
    const yearDirectoryList:DirectoryResponse = await getYearDirectoryList.json();

    // sorts the year folders by last_modified_at (latest first)
    const sortedYearDirectoryList:Directory[] = yearDirectoryList.data.sort((a:Directory, b:Directory) => {
        const x:number = a.added_at;
        const y:number = b.added_at;
        return x < y ? 1 : x > y ? -1 : 0;
    })

    return sortedYearDirectoryList
}

async function getFiles(sortedYearDirectoryList:Directory[]){
    // gets all files within the year directories
    
    const fileList:FileResponse[] = await Promise.all(sortedYearDirectoryList.map(async directory =>{
        const getFiles:Response = await fetch(
            `https://api.infomaniak.com/2/drive/608492/files/${directory.id}/files`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type": "application/json",
                },
            }
        );
            const files:FileResponse = await getFiles.json();
            return files
    }))
    return fileList
}

export default async function Resultate() {
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  const sortedYearDirectoryList:Directory[] = await getDirs()
  const fileList:FileResponse[] = await getFiles(sortedYearDirectoryList)

  return (
    <main className="main">
      <section className="section">
        <h1>Resultate</h1>
        <div className={s.introContainer}>
          <p>
            Hier sind alle Resultate der auswärtigen Schiessen für das aktuelle
            Jahr <span>{`${currentYear}`}</span> aufgelistet. Ältere Resultate
            vergangener Jahre finden sich im Archiv am Ende der Seite. Die
            Resultate sind nach Aktualität geordnet.
          </p>
        </div>
        {
          sortedYearDirectoryList.length == 0 
          ? 
          <h2>{`${currentYear} war noch nichts los...`}</h2>
          :
          sortedYearDirectoryList.map((years:Directory) => {
            const title:string = years.path.split("/")[2]
            return (
              <div className={s.container} key={`fragment_${years.id}`}>
                <h2 key={`resultTitle_${title}`}>
                  {title}
                </h2>
                <div key={`linkContainer_${title}`} className={s.linkContainer}>
                  {fileList.map(fileObject => {
                    return fileObject.data.map(file=>{
                      if(file.parent_id == years.id){
                        return <LinkButton file={file} />
                      }
                    });
                  })}
                </div>
              </div>
            );
          })
        }
        <hr />
        <Link
          className={s.archiv}
          href={`https://kdrive.infomaniak.com/app/share/608492/e3b365ba-9347-441c-ac26-ad9a9d6c72c5`}
          target={"_blank"}
        >
          <span className={s.archivText}>Archiv</span>
        </Link>
      </section>
    </main>
  );
}