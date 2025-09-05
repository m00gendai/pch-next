import { Directory, DirectoryResponse, FileResponse } from "@/interfaces";
import ChapterTitle from "./ChapterTitle";
import React, { Suspense } from "react";
import LinkContainer from "./LinkContainer";
import LoadingSkeleton from "./loadingSkeleton";

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
        }
    );
    
    const yearDirectoryList:DirectoryResponse = await getYearDirectoryList.json();

    
      return yearDirectoryList.data
    
}

async function getFiles(sortedYearDirectoryList:Directory[]){
    // gets all files within the year directories
    
    const fileList:FileResponse[] = await Promise.all(sortedYearDirectoryList.map(async directory =>{
        const getFiles:Response = await fetch(
            `https://api.infomaniak.com/3/drive/${process.env.DRIVE}/files/${directory.id}/files?limit=25&order_by[]=name`,
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

export default async function ResultContainer(){
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  const sortedYearDirectoryList:Directory[] = await getDirs()
    return(
        <>
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
        </>
    )
}