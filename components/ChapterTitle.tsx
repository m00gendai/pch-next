import s from "@/styles/components/chapterTitle.module.css"
import Link from "next/link"

interface Props{
    title: string
}

export default function ChapterTitle({title}: Props){

    const anchor = title.toLowerCase().replace(/\s+/g, "-")

    return(
        <div className={s.container}>
            <div className={s.inner}>
                <Link href={`#${anchor}`} className={s.link}>
                    <h2 id={anchor} className={s.title}>
                        {title}
                    </h2>
                </Link>
                <div className={s.deco}></div>
            </div>
        </div>
    )
}