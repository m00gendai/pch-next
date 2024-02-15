import { LinkItem } from "@/interfaces"
import Image from "next/image"
import s from "@/styles/LinkGallery.module.css"
import Link from "next/link"

interface Props{
    links: LinkItem[]
}

export default function LinkGallery({links}:Props){
    return(
        <div className={s.container}>
            {links.map(link=>{
                return (
                    <Link className={s.frame} href={link.url} target="_blank">
                        <div className={s.image}>
                            <Image 
                                src={`${process.env.NEXT_PUBLIC_STORAGE}${link.image.path}`}
                                alt={link.image.title}
                                fill={true}
                                style={{objectFit: "contain"}}
                            />
                        </div>
                        <div className={s.text}>
                            <h3>{link.name}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}