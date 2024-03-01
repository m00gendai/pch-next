"use client"

import { useState } from "react"
import MapLink from "./MapLink"
import s from "./ShootingDays.module.css"

interface Props{
    shootingDays: SwissgriddedShootingDays
}

export default function ShootingDayContainer({shootingDays}:Props){

    const dateOptions:Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric", 
        month: "2-digit",
        day: "2-digit"
    }
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit"
    }    

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [displayPages, setDisplayPages] = useState<number>(10)
    const pages:number = Math.ceil(shootingDays.totalItems/displayPages)
    const pagesArray:number[] = Array.from(Array(pages).keys())

    return(
        <>
            <div className={s.container}>
                {shootingDays.items.map((item, index)=>{
                    if((index+1) > (currentPage*displayPages)-displayPages && (index+1 <= (currentPage*displayPages))){
                    return(
                        <div className={s.entry} key={`entry_${index}`}>
                            <div className={s.dateTime}>
                                <p className={s.date} dangerouslySetInnerHTML={{__html: new Date(item.from).toLocaleDateString("de-CH", dateOptions)}}></p>
                                <p className={s.time}>{`${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)} - ${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)}`}</p>
                            </div>
                            <div className={s.info}>
                                <p className={s.location}>{item.firingRangeName}</p>
                                <p className={s.club}>{item.organizationName}</p>
                            </div>
                            <MapLink place={item.firingRangeName} coord1={item.coordinates.northing} coord2={item.coordinates.easting} />
                        </div>
                    )}
                })}
            </div>
            <div className={s.pagination}>
                {pagesArray.map(page=>{
                    return(
                        <div className={s.pageButton} key={`page_${page+1}`} onClick={()=>setCurrentPage(page+1)}>
                            {page+1}
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}