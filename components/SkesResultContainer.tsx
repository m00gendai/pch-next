import revalidate from "@/app/actions/revalidate";
import { Directory, DirectoryResponse, FileResponse } from "@/interfaces";
import React from "react";
import ChapterTitle from "./ChapterTitle";
import LinkContainer from "./LinkContainer";


async function getDirs(){
    const date:Date = new Date();
    const currentYear:number = date.getFullYear();
  
    // searches all folders with {currentYear} as directory name and includes the directory path (to extract the parent directory name easier)
    const getYearDirectoryList:Response = await fetch(
        `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/search?with=path&directory_id=${process.env.SKES}&depth=unlimited&types[]=dir&query="${currentYear}"&per_page=1000`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type": "application/json",
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
                }
            }
        );
            const files:FileResponse = await getFiles.json();
            return files
    }))
    return fileList
  }
  
  export default async function SkesResultContainer(){
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  const sortedYearDirectoryList:Directory[] = await getDirs()
  
    return(
        <>
        {
            sortedYearDirectoryList.length == 0 
            ? 
            null
            :
            await Promise.all(sortedYearDirectoryList.map(async (years:Directory) => {
              const fileList:FileResponse[] = await getFiles(sortedYearDirectoryList)
              return (
                <React.Fragment key={`fragment_${years.id}`}>
                  <ChapterTitle title={`Resultate ${currentYear}`} />
                  <LinkContainer fileList={fileList} year={years.id}/>
                </React.Fragment>
              );
            }))
          }
          </>
    )
}