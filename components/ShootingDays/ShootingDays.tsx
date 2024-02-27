import s from "./ShootingDays.module.css"
import MapLink from "./MapLink"

async function getShootingDays(){

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
                "filter": 1
            },
            "canton": {
                "filterType": "multi-select",
                "variant": "singleTargetInListString",
                "filter": [
                    "SH"
                ]
            },
            "disciplineShortNameGerman": {
                "filterType": "multi-select",
                "variant": "singleTargetInListString",
                "filter": [
                    "P50", 
                    "P25"
                ]
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


export default async function ShootingDays(){
    const date: Date = new Date()
    const shootingDays: ShootingDayResponse = await getShootingDays()
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
            <div className={s.container}>
                {shootingDays.items.map(item=>{
                    return(
                        <div className={s.entry}>
                            <div className={s.dateTime}>
                                <p className={s.date}>{new Date(item.from).toLocaleDateString("de-CH", dateOptions)}</p>
                                <p className={s.time}>{`${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)} - ${new Date(item.from).toLocaleTimeString("de-CH", timeOptions)}`}</p>
                            </div>
                            <div className={s.info}>
                                <p className={s.location}>{item.location}</p>
                                <p className={s.club}>{item.organizationName}</p>
                            </div>
                            <div className={s.map}>
                                <MapLink coord1={item.coordinates.split("/")[0]} coord2={item.coordinates.split("/")[1]} />
                            </div>
                        </div>
                    )
                })}
            </div>

    )
}