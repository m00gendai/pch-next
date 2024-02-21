import { Directory, DirectoryResponse, FileResponse } from "../../interfaces"
import ChapterTitle from "@/components/ChapterTitle";
import React from "react";
import LinkContainer from "@/components/LinkContainer";
import Archive from "@/components/Archive";
import revalidate from "../actions/revalidate";
import Spacer from "@/components/Spacer";

async function getDirs(){
    const date:Date = new Date();
    const currentYear:number = date.getFullYear();

    // searches all folders with {currentYear} as directory name and includes the directory path (to extract the parent directory name easier)
    const getYearDirectoryList:Response = await fetch(
        `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/search?with=path&directory_id=${process.env.RESULTATE}&depth=unlimited&types[]=dir&query="${currentYear}"&per_page=1000`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type": "application/json",
            },
            next: {
              tags: ["resultDirs"]
            }
        }
    );
    
    const yearDirectoryList:DirectoryResponse = await getYearDirectoryList.json();
    if(yearDirectoryList.data.length === 0){
      return yearDirectoryList.data
    }
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
            `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/${directory.id}/files`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type": "application/json",
                },
                next: {
                  tags: ["resultFiles"]
                }
            }
        );
            const files:FileResponse = await getFiles.json();
            return files
    }))
    return fileList
}

export default async function Resultate() {
  revalidate("ResultDirs")
  revalidate("ResultFiles")
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  const sortedYearDirectoryList:Directory[] = await getDirs()
  

  return (
    <main className="main">
      <section className="section">
        <h1>Resultate</h1>
        <div className="chapter">
          <div className="chapter_text" dangerouslySetInnerHTML={{__html: 
            `Hier sind alle Resultate der auswärtigen Schiessen für das aktuelle
            Jahr ${currentYear} aufgelistet. 
            Ältere Resultate vergangener Jahre finden sich im Archiv am Ende der Seite. 
            Die Resultate sind nach Aktualität geordnet.`}}>
          </div>
        </div>
        {
          sortedYearDirectoryList.length == 0 
          ? 
          <ChapterTitle title={`${currentYear} war noch nichts los...`} />
          :
          sortedYearDirectoryList.map(async (years:Directory) => {
            const title:string = years.path.split("/")[2]
            const fileList:FileResponse[] = await getFiles(sortedYearDirectoryList)
            return (
              <React.Fragment key={`fragment_${years.id}`}>
                <ChapterTitle title={title} key={`resultTitle_${title}`} />
                <LinkContainer fileList={fileList} year={years.id}/>
              </React.Fragment>
            );
          })
        }
        <Archive />
        <Spacer />
      </section>
    </main>
  );
}