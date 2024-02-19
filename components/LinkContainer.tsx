import React from "react"
import LinkButton from "./LinkButton"
import { FileResponse } from "@/interfaces"
import s from "@/styles/components/linkContainer.module.css"

interface Props{
    fileList: FileResponse[]
    year: number
}

export default function LinkContainer({fileList, year}:Props){
    return(
        <div className={s.linkContainer}>
           {fileList.map(fileObject => {
                    return fileObject.data.map(file=>{
                      if(file.parent_id == year){
                        return <LinkButton file={file} key={file.id}/>
                      }
                    });
                  })}
        </div>
    )
}