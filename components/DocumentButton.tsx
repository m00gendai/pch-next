import Link from "next/link"
import { Document } from "@/interfaces"
import s from "@/styles/components/documentButton.module.css"

interface Props{
    file:Document
}

export default function LinkButton({file}:Props){

    return(
        <Link key={`result_${file._id}`} className={s.link} href={`${process.env.STORAGE}${file.path}`}>
            <div >
                {file.title}
            </div>
        </Link>
    )
}