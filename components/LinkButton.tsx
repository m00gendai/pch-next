import { File, GetFileResponse } from "@/interfaces"
import s from "@/styles/components/linkButton.module.css"
import Link from "next/link"

interface Props{
    file:File
}

async function getFile(id:number){
    const getUrl = await fetch(`https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/${id}/temporary_url`,{
        method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type" : "application/json",
            },
        })
        const url:GetFileResponse = await getUrl.json()
        
        if(url.result === "error"){
            return `${process.env.ARCHIVE}`
        }
        return url.data.temporary_url 
    }

export default async function LinkButton({file}:Props){
    const name:string = file.name.replaceAll("_", " ").replace(".pdf", "");
    const path:string = await getFile(file.id)

    return(
        <Link key={`result_${file.id}`} className={s.link} href={path} target="_blank">
            <div >
                {name}
            </div>
        </Link>
    )
}