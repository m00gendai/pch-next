import React from "react"
import s from "@/styles/components/linkContainer.module.css"
import LinkButtonLoading from "./LinkButtonLoading"

export default function LinkContainerLoading(){
    const times:number = 5
    const keys: number[] = []
    for(let i=0;i<times;i++){
        keys.push(i)
    }
    return(
        <div className={s.linkContainer}>
           {keys.map(item=>{
            return <LinkButtonLoading index={item} key={`button_${item}`} />
           })}
        </div>
    )
}