import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import s from '../styles/Home.module.css'

export default function Home() {
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
        <div className={s.linkContainer}>
          <Link className={s.link} href="/anlaesse"><span className={s.text}>Anlässe</span></Link>
          <Link className={s.link} href="/resultate"><span className={s.text}>Resultate</span></Link>
          <div className={s.logo}></div>
          <Link className={s.link} href="/mitmachen"><span className={s.text}>Mitmachen</span></Link>
          <Link className={s.link} href="/jahresprogramm"><span className={s.text}>Jahres-programm</span></Link>
        </div>
        <Link className={s.skes} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span></Link>     
      </section>
      <footer className="footer">
      </footer>
    </main>
  )
}
