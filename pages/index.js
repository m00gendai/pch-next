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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pistolenclub Hallau" />
        <meta name="twitter:description" content="Der Pistolenclub in den Hallauer Weinbergern" />
        <meta name="twitter:image" content="https://zingy-daffodil-ca4782.netlify.app/pch-logo.png" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pistolenclub Hallau" />
        <meta property="og:description" content="Der Pistolenclub in den Hallauer Weinbergern" />
        <meta property="og:url" content="https://zingy-daffodil-ca4782.netlify.app" />
        <meta property="og:image" content="https://zingy-daffodil-ca4782.netlify.app/pch-logo.png" />
        <link rel="icon" href="/pch-logo.png" />
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
