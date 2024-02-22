import { Document } from "@/interfaces"
import Link from "next/link"
import s from "@/styles/components/planButton.module.css"

interface Props{
    plan: Document
}

export default function PlanButton({plan}:Props){
    return(
        <Link key={`result_${plan._id}`} target="_blank" className={s.link} href={`${process.env.NEXT_PUBLIC_STORAGE}${plan.path}`}>
           <div className={s.flag}></div>
            <div className={s.title}>
                {plan.title}
            </div>
        </Link>
    )
}