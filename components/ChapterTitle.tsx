import s from "@/styles/components/chapterTitle.module.css"

interface Props{
    title: string
}

export default function ChapterTitle({title}:Props){
    return(
        <div className={s.container}>
            <div className={s.inner}>
                <h2 className={s.title}>
                    {title}
                </h2>
                <div className={s.deco}>
                </div>
            </div>
        </div>
    )
}