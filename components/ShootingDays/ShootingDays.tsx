import s from "./ShootingDays.module.css"
import MapLink from "./MapLink"
import { getCanton, getShootingType } from "@/utils"

interface Props{
    shootType: number
    canton: string[]
    disciplineType: string[]
}

async function getShootingDays(shootType:number, canton:string[], disciplineType:string[]){

    const date:Date = new Date()

    const requestBody = {
        "startRow": 0,
        "endRow": 65526,
        "includeCount": true,
        "filterModels": {
            "from": {
                "filterType": "date",
                "variant": "greaterThanOrEqual",
                "filter": `${date.toISOString()}`
            },
            "type": {
                "filterType": "number",
                "variant": "equals",
                "filter": shootType
            },
            "canton": {
                "filterType": "multi-select",
                "variant": "singleTargetInListString",
                "filter": canton
            },
            "disciplineShortNameGerman": {
                "filterType": "multi-select",
                "variant": "singleTargetInListString",
                "filter": disciplineType
            }
        },
        "sortModel": [
            {
                "columnId": "from",
                "sort": "asc"
            }
        ]
    }

    const getShootingDays:Response = await fetch(`https://www.sat.admin.ch/api/ShootingDayDeclaration/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })

    return await getShootingDays.json() 
}


export default async function ShootingDays({shootType, canton, disciplineType}:Props){
    const date: Date = new Date()
    const shootingDays: ShootingDayResponse = await getShootingDays(shootType, canton, disciplineType)
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

    return(
        <>
        <p>{`Im Jahre ${date.getFullYear()} finden im Kanton ${getCanton(canton)} ${getShootingType(shootType)} an folgenden Daten und Orten statt:`}</p>
            <div className={s.container}>
                {shootingDays.items.map(item=>{
                    return(
                        <div className={s.entry}>
                            <div className={s.dateTime}>
                                <p className={s.date}>{new Date(item.from).toLocaleDateString("de-CH", dateOptions)}</p>
                                <p className={s.time}>{`${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)} - ${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)}`}</p>
                            </div>
                            <div className={s.info}>
                                <p className={s.location}>{item.firingRangeName}</p>
                                <p className={s.club}>{item.organizationName}</p>
                            </div>

                                <MapLink coord1={item.coordinates.split("/")[0]} coord2={item.coordinates.split("/")[1]} />
                            
                        </div>
                    )
                })}
            </div>
        </>

    )
}