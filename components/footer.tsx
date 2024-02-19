import Link from "next/link"
import s from"@/styles/footer.module.css"

export default function Footer(){

    const date:Date = new Date()
    const currentYear:number = date.getFullYear()

    return(
        <footer className={s.footer}>
            <div className={s.desktop}>
                    <p>
                        ©{`2022 - ${currentYear}`} Pistolenclub Hallau
                    </p>
                    <div className={s.linkContainer}>
                        <Link className={s.link} href="/impressum">Impressum</Link>
                        <Link className={s.link} href="/datenschutz">Datenschutz</Link>
                    </div>
                </div>
        </footer>
    )
}