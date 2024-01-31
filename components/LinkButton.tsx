"use client"

import { File } from "@/interfaces"
import s from "@/styles/components/linkButton.module.css"

interface Props{
    file:File
}

async function getFile(id:number){
    let url:any

    const getUrl:Response = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${id}/temporary_url`,{
        method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type" : "application/json"
            },
        }
    )

    url = await getUrl.json()
    return url
}

export default function LinkButton({file}:Props){
    const name:string = file.name.replaceAll("_", " ").replace(".pdf", "");

    return(
        <div key={`result_${file.id}`} className={s.link} onClick={() => getFile(file.id)}>
            <div >
                {name}
            </div>
        </div>
    )
}