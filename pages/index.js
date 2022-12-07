import Link from "next/link"
import s from '../styles/Home.module.css'
import { useMediaQuery } from '@react-hook/media-query'
import Header from "../components/header"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`
  const isMobile = useMediaQuery('only screen and (orientation: portrait)')

  return (
    <main className="main">
      <Header title={"Pistolenclub Hallau"} content={"Der Pistolenclub in den Hallauer Weinbergen"} url={headUrl} />
      <section className="section">
        <h1 className={s.title}>
          Pistolenclub Hallau
        </h1>
        {isMobile?
        <Link className={s.skes} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span></Link>
        :
        null
        }
        <div className={s.linkContainer}>
          <Link className={s.link} href="/anlaesse"><span className={s.text}>Anlässe</span></Link>
          <Link className={s.link} href="/resultate"><span className={s.text}>Resultate</span></Link>
          {isMobile?
          null
          :
          <div className={s.logo}></div>
          }
          <Link className={s.link} href="/mitmachen"><span className={s.text}>Mitmachen</span></Link>
          <Link className={s.link} href="/anlaesse"><span className={s.text}>Jahres-programm</span></Link>
        </div>
         {isMobile?
        null
        :
        <Link className={s.skes} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span></Link>
        }
      </section>
    </main>
  )
}
