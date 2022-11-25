import Head from 'next/head'
import Link from "next/link"
import s from '../styles/Home.module.css'
import { useMediaQuery } from '@react-hook/media-query'

export default function Home() {

  const isMobile = useMediaQuery('only screen and (orientation: portrait)')

  return (
    <main className="main">
      <Head>
        <title>Pistolenclub Hallau</title>
        <meta name="description" content="Pistolenclub Hallau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <div className={s.logo}></div>
          <Link className={s.link} href="/mitmachen"><span className={s.text}>Mitmachen</span></Link>
          <Link className={s.link} href="/jahresprogramm"><span className={s.text}>Jahres-programm</span></Link>
        </div>
         {isMobile?
        null
        :
        <Link className={s.skes} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span></Link>
        }
      </section>
      <footer className="footer">
      </footer>
    </main>
  )
}
