import s from "@/styles/components/linkButtonLoading.module.css"
import Link from "next/link"
interface Props{
    index: number
}

export default async function LinkButton({index}:Props){
    
    return(
        <Link key={`result_${index}`} className={s.link} href={"/"} target="_blank" style={{pointerEvents: "none"}} tabIndex={-1}>
            <div>
                {`...`}
            </div>
        </Link>
    )
}