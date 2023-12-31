import Link from "next/link"
import s from '../styles/Home.module.css'
import Header from "../components/header"
import { useRouter } from 'next/router'
import {GiAchievement, GiCalendar, GiStabbedNote, GiThreeFriends} from "react-icons/gi"

export default function Home() {

  const router = useRouter()
  const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

  return (
    <main className="main">
      <Header title={"Pistolenclub Hallau"} content={"Der Pistolenclub in den Hallauer Weinbergen"} url={headUrl} />
      <section className="section">
        <h1 className={s.title}>
          Pistolenclub Hallau
        </h1>
        <Link className={`${s.skes} ${s.top}`} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span></Link>
        <div className={s.linkContainer}>
          <Link className={s.link} href="/anlaesse"><span className={s.text}><GiCalendar /></span></Link>
          <Link className={s.link} href="/resultate"><span className={s.text}><GiAchievement /></span></Link>
          <div className={s.logo}></div>
          <Link className={s.link} href="/mitmachen"><span className={s.text}><GiThreeFriends /></span></Link>
          <Link className={s.link} href="/anlaesse"><span className={s.text}><GiStabbedNote /></span></Link>
          </div>
        <Link className={`${s.skes} ${s.bottom}`} href="/schiessen/schwabenkrieg-erinnerungsschiessen"><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2024</span></Link>
      </section>
    </main>
  )
}
