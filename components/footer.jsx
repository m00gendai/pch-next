import Link from "next/link"
import s from "../styles/footer.module.css"
import { useMediaQuery } from '@react-hook/media-query'

export default function Footer(){

    const isMobile = useMediaQuery('only screen and (orientation: portrait)')
    const date = new Date()
    const currentYear = date.getFullYear()

    return(
        <footer className={s.footer}>
            {
                isMobile
                ?
                <>
                    <p>
                        ©{currentYear.toString() == "2022" ? "2022" : `2022 - ${currentYear}`} Pistolenclub Hallau
                    </p>
                    <div className={s.linkContainer}>
                        <Link className={s.link} href="/impressum">Impressum</Link>
                        <Link className={s.link} href="/datenschutzerklaerung">Datenschutz</Link>
                    </div>
                </>
                :
                <>
                    <Link className={s.link} href="/impressum">Impressum</Link>
                    <p>
                        ©{currentYear.toString() == "2022" ? "2022" : `2022 - ${currentYear}`} Pistolenclub Hallau
                    </p>
                    <Link className={s.link} href="/datenschutzerklaerung">Datenschutz</Link>
                </>
            }
            
        </footer>
    )
}