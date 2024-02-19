import { Board } from "@/interfaces"
import Image from "next/image"
import s from "@/styles/components/BoardMember.module.css"
import { gradientPlaceholder, toRGB } from "@/utils"

interface Props{
    member: Board
}

export default function BoardMember({member}:Props){

    const rgb:string[] = member.image.colors.map(color => toRGB(color))

    return(
        <div className={s.frame} style={gradientPlaceholder(rgb)}>
            <div className={s.image}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${member.image.path}`}
                    alt={member.image.title}
                    fill={true}
                    style={{objectFit: "contain"}}
                />
            </div>
            <div className={s.name} >
                <h3>{member.position}</h3>
                <p>{member.name}</p>
            </div>
        </div>
    )
}