import Link from "next/link"
import s from "../styles/footer.module.css"

export default function Footer(){

    const date = new Date()
    const currentYear = date.getFullYear()

    return(
        <footer className={s.footer}>
            <p>
                ©{currentYear.toString() == "2022" ? "2022" : `2022 - ${currentYear}`} Pistolenclub Hallau
            </p>
            <div className={s.linkContainer}>
                <Link className={s.link} href="/impressum">Impressum</Link>
                <Link className={s.link} href="/datenschutzerklaerung">Datenschutz</Link>
            </div>
        </footer>
    )
}