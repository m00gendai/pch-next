import Link from "next/link"
import s from '../styles/Home.module.css'
import {GiAchievement, GiCalendar, GiStabbedNote, GiThreeFriends} from "react-icons/gi"
import { Hero, Logo } from "@/interfaces"
import Image from "next/image"
import { pageMetadata } from "@/utils"

async function getLogoClub(){
  const getLogo: Response = await fetch(
    'https://cms.pistolenclub-hallau.ch/api/content/items/logoClub?populate=100',
    {
        headers: {
            'api-key': `${process.env.CMS}`,
        },
        next: {
            revalidate: 10,
        }
    }
  )

  const logo:Logo[] = await getLogo.json()
  return logo[0]
}

async function getLogoSkes(){
  const getLogo: Response = await fetch(
    'https://cms.pistolenclub-hallau.ch/api/content/items/logoSKES?populate=100',
    {
        headers: {
            'api-key': `${process.env.CMS}`,
        },
        next: {
            revalidate: 10,
        }
    }
  )

  const logo:Logo[] = await getLogo.json()
  return logo[0]
}

async function getHeroImage(){
  const getHeroImage: Response = await fetch(
    'https://cms.pistolenclub-hallau.ch/api/content/items/hero?populate=100',
    {
        headers: {
            'api-key': `${process.env.CMS}`,
        },
        next: {
            revalidate: 10,
        }
    }
  )

  const hero:Hero[] = await getHeroImage.json()
  return hero[0]
}

export async function generateMetadata(){
  return pageMetadata("Home")
}

export default async function Home() {

  const logoClub: Logo = await getLogoClub()
  const logoSkes: Logo = await getLogoSkes()
  const hero: Hero = await getHeroImage()

  return (
    <main className="main">
     <section className="section">
      <div className={s.contentBox}>
        <Link className={`${s.skes} ${s.top}`} href="/schiessen/schwabenkrieg-erinnerungsschiessen" style={{backgroundImage: `url("${process.env.NEXT_PUBLIC_STORAGE}${logoSkes.logo.path}")`}}>
          <span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2023</span>
          </Link>
          <div className={s.hero}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE}${hero.image.path}`}
              alt={"Pistolenclub Hallau Impression"}
              fill={true}
              style={{objectFit: "cover"}}
          />
            <div className={s.logo}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE}${logoClub.logo.path}`}
              alt={"Pistolenclub Hallau"}
              fill={true}
              style={{objectFit: "contain"}}
            />
          </div>
        </div>
       
          
          
         

        
        <Link className={`${s.skes} ${s.bottom}`} href="/schiessen/schwabenkrieg-erinnerungsschiessen" style={{backgroundImage: `url("${process.env.NEXT_PUBLIC_STORAGE}${logoSkes.logo.path}")`}}><span className={s.skesText}>Schwabenkrieg-Erinnerungsschiessen 2024</span></Link>
        </div>
      </section>
    </main>
  )
}
