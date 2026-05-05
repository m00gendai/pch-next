import Link from "next/link"
import s from "@/styles/components/sponsor.module.css"
import { Sponsor } from "@/interfaces"
import Image from "next/image"

async function getSponsors(){
  const getSponsors: Response = await fetch(
    'https://cms.pistolenclub-hallau.ch/api/content/items/sponsors?populate=100',
    {
        headers: {
            'api-key': `${process.env.CMS}`,
        },
        next: {
            revalidate: 10,
        }
    }
  )

  const sponsors:Sponsor[] = await getSponsors.json()
  return sponsors
}

export default async function Sponsors(){

    const sponsors = await getSponsors()
    console.log(sponsors)
    return(
        <div className={s.container}>
            <div className={s.title}>
                Unsere Sponsoren
            </div>
            <div className={s.logoContainer}>
                {sponsors.map((sponsor, index) =>{
                    return (
                        <Link className={s.logo} href={sponsor.link} target="_blank" key={`sponsorLogo_${index}`}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STORAGE}${sponsor.image.path}`}
                                alt={sponsor.title}
                                fill={true}
                                style={{objectFit: "cover"}}
                            />
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}