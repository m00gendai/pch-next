import Link from "next/link"
import Image from "next/image"
import s from "./ShootingDays.module.css"
import mapIcon from "../../public/map-map-marker-svgrepo-com.svg"

interface Props{
    place: string
    coord1: string
    coord2: string
}


export default function MapLink({place, coord1, coord2}:Props){

    return(
    
            <Link className={s.map} title={`Karte der Schiessanlage in ${place} in Google Maps anzeigen`} href={`https://www.google.com/maps/search/?api=1&query=${coord1}%2C${coord2}`} target="_blank">
                <Image 
                    src={mapIcon}
                    alt="Karte" 
                    fill={true}
                    style={{objectFit: "contain"}}
                />
            </Link>
        
    )
}