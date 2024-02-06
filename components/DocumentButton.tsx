import Link from "next/link"
import { Document } from "@/interfaces"
import s from "@/styles/components/documentButton.module.css"

interface Props{
    file:Document
}

export default function LinkButton({file}:Props){
    const fileType:string = file.mime.split("/")[1] === "pdf" ? "pdf" : "generic"
    return(
        <Link key={`result_${file._id}`} target="_blank" className={s.link} href={`${process.env.STORAGE}${file.path}`}>
            <div className={`${s.document} ${s[fileType]}`}></div>
            <div >
                {file.title}
            </div>
        </Link>
    )
}