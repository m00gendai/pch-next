import ShootingDayContainer from "./ShootingDayContainer"
import Link from "next/link"
import s from "./ShootingDays.module.css"
import { getCanton, getDiscipline, getShootingType } from "@/utils"

interface Props{
    shootType: number
    canton: string[]
    disciplineType: string[]
}


async function convertSwissgrid(coord1:string, coord2:string){
    // The coordinates from the Shooting Days are, for SOME GODFORSAKEN REASON, in LV03
   const getCoordinates = await fetch(`https://geodesy.geo.admin.ch/reframe/lv03towgs84?easting=${coord1}&northing=${coord2}&format=json`)
   return await getCoordinates.json()
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

    const shootingDays:ShootingDayResponse = await getShootingDays.json()
    const swissgridded:SwissgriddedItem[] = await Promise.all(shootingDays.items.map(async item=>{
        const coord1=item.coordinates.split("/")[0]
        const coord2=item.coordinates.split("/")[1]
        const wgs84 = await convertSwissgrid(coord1, coord2)
        return {...item, coordinates: wgs84}
    }))
    const swissgriddedItems:SwissgriddedShootingDays = {
        items: swissgridded,
        totalItems: shootingDays.totalItems
    }
    return swissgriddedItems
}

export default async function ShootingDays({shootType, canton, disciplineType}:Props){
    const date: Date = new Date()
    const shootingDays: SwissgriddedShootingDays = await getShootingDays(shootType, canton, disciplineType)
    return(
        <div className={s.shootingDays}>
            <p className={s.intro} dangerouslySetInnerHTML={{__html: 
                `Im Jahre ${date.getFullYear()} ${shootingDays.totalItems === 1 ? "findet" : "finden"} ${canton.length > 1 ? `in den Kantonen` : `im Kanton`} ${getCanton(canton)} ${shootingDays.totalItems} ${getShootingType(shootType, shootingDays.totalItems)} mit ${getDiscipline(disciplineType)} an folgenden Daten und Orten statt:`
            }}></p>
            <ShootingDayContainer shootingDays={shootingDays} />
            {shootType === 1 ? <p className={s.dontForget} dangerouslySetInnerHTML={{__html: 
                `<strong>Nicht vergessen mitzunehmen:</strong>
                Aufforderungsschreiben mit den Klebeetiketten, Dienstbüchlein, Schiessbüchlein oder militärischer Leistungsausweis, amtlicher Ausweis, persönliche Dienstwaffe mit Putzzeug, persönlicher Gehörschutz.`
            }}></p> : null}
            <Link className={s.link} title={"Schiesswesen ausser Dienst, Abfrage Schiesstage"} href={`https://www.sat.admin.ch/search-shooting-days`} target={`_blank`}>{`Weitere schweizweite Schiessdaten sind beim Schiesswesen ausser Dienst, Abfrage Schiesstage ersichtlich.`}</Link>
        </div>

    )
}