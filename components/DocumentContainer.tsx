import React from "react"
import { Document } from "@/interfaces"
import s from "@/styles/components/documentContainer.module.css"
import DocumentButton from "./DocumentButton"

interface Props{
    files: Document[]
}

export default function LinkContainer({files}:Props){
    return(
        <div className={s.documentContainer}>
           {files.map(file=>{
                return(
                    <DocumentButton key={file._id} file={file} />
                )
            })} 
        </div>
    )
}