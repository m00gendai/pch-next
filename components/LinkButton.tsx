import { File, GetFileResponse } from "@/interfaces"
import s from "@/styles/components/linkButton.module.css"
import Link from "next/link"

interface Props{
    file:File
}

async function getFile(id:number){
    try{
        const getUrl:Response = await fetch(`${process.env.GETFILE}/api/getFile`,{
            method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.KDRIVE}`,
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({id: id})
            }
        )
        const url:GetFileResponse = await getUrl.json()
        
        if(url.result === "error"){
            return `${process.env.ARCHIVE}`
        }
        return url.data.temporary_url 
    } catch{
        return `${process.env.ARCHIVE}`
    }
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