import React from "react"
import LinkButton from "./LinkButton"
import { FileResponse } from "@/interfaces"
import s from "@/styles/components/linkContainer.module.css"

interface Props{
    files: FileResponse
}

export default function LinkContainer({files}:Props){
    return(
        <div className={s.linkContainer}>
           {files.data.map(file=>{
                return(
                    <React.Fragment key={file.id}>
                        <LinkButton file={file} />
                    </React.Fragment>
                )
            })} 
        </div>
    )
}