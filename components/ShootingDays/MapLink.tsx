import Link from "next/link"
import s from "./ShootingDays.module.css"

async function convertSwissgrid(coord1:string, coord2:string){
    // The coordinates from the Shooting Days are, for SOME GODFORSAKEN REASON, in LV03
   const getCoordinates = await fetch(`https://geodesy.geo.admin.ch/reframe/lv03towgs84?easting=${coord1}&northing=${coord2}&format=json`)
   return await getCoordinates.json()
}

interface Props{
    coord1: string
    coord2: string
}


export default async function MapLink({coord1, coord2}:Props){
    const wgs84 = await convertSwissgrid(coord1, coord2)
    return(
        <div className={s.map}>
            <Link href={`https://www.google.com/maps/search/?api=1&query=${wgs84.northing}%2C${wgs84.easting}`} target="_blank">H</Link>
        </div>
    )
}