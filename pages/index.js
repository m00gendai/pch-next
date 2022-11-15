import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Pistolenclub Hallau</title>
        <meta name="description" content="Pistolenclub Hallau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <h1 className={s.title}>
          Pistolenclub Hallau
        </h1>
           <Link href="/anlaesse">Anlässe</Link>
           <Link href="/resultate">Resultate</Link>
           <div className={s.logo}></div>
           <Link href="/mitmachen">Mitmachen</Link>
           <Link href="/jahresprogramm">Jahresprogramm</Link>
           <Link href="/schiessen/schwabenkrieg-erinnerungsschiessen">Schwabenkrieg-Erinnerungsschiessen 2023</Link>

        </main>

      <footer className={s.footer}>
       
      </footer>
    </div>
  )
}
