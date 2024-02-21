import Link from "next/link"
import s from "@/styles/components/archive.module.css"

export default function Archive(){
    return(
        <Link
          className={s.archiv}
          href={`https://kdrive.infomaniak.com/app/share/608492/e3b365ba-9347-441c-ac26-ad9a9d6c72c5`}
          target={"_blank"}
        >
          <span className={s.archivText}>Archiv</span>
        </Link>
    )
}