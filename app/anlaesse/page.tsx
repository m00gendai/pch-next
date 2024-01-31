import { FileResponse, ShootTime } from "@/interfaces"
import s from "@/styles/Anlaesse.module.css" 
import { convertDate } from "@/utils"
import revalidate from "@/app/actions/revalidate"
import React from "react"
import LinkContainer from "@/components/LinkContainer"

async function getShootTimes(){
    const getShootTimes:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/shootTimes?populate=100',
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
            next: {
                tags: [
                    "shoot-times"
                ]
            }
        }
    )

    const shootTimes:ShootTime[] = await getShootTimes.json()
    return shootTimes
}

async function getFiles(){

    const getFiles:Response = await fetch(
        `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/search?with=path&directory_id=${process.env.HEIMSTICHE}&depth=unlimited&types[]=file&per_page=1000`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type": "application/json",
            },
        }
    );
    
    const files:FileResponse = await getFiles.json();
    return files
}

export default async function Anlaesse(){
    revalidate("shoot-times")
    const shootTimes:ShootTime[] = await getShootTimes()
    const files:FileResponse = await getFiles()

    return (
        <main className="main">
            <section className="section">
                <h1>Anlässe</h1>
                <h2>Kalender</h2>
                    <iframe className={s.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBrussels&showTitle=0&showNav=1&showCalendars=0&showTz=0&src=NmFsa2FmYjZnN2JqOWJnaWw0MzFjdmlzMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26" width="800" height="600" ></iframe>
                <h2>Besonderes</h2>
                    <ul className={s.ul}>
                        <li>
                            Trainingszeiten: Jeweils Mittwochs bis zum Einnachten. Im Sommer ab 19:00, Frühling/Herbst ab 18:00, einsehbar im Kalender.
                        </li>
                    </ul>
                <h2>Heimstiche</h2>
                    <div className={s.container}>
                        Heimstiche sind Wettberwerbe, die im heimischen Schiessstand geschossen werden können. Wir schiessen folgende Stiche:
                            <ul className={s.ul}>
                                {shootTimes.map(shoot =>{
                                    return(
                                        <li key={shoot._id} dangerouslySetInnerHTML={{
                                            __html: `<strong>${shoot.name}:</strong> ${shoot.remarks === null ? `von ${convertDate(shoot.startDate as string)} bis und mit ${convertDate(shoot.endDate as string)}` : `${shoot.remarks}`} `
                                        }}>
                                        </li>
                                    )
                                })}
                            </ul>
                        <LinkContainer files={files} />
                    </div>
                <h2>Jahresmeisterschaft</h2>
                    <div className={s.container}>
                        Jedes Jahr küren wir den besten Hallauer Pistolenschützen. Die Bestresultate der folgenden Stiche 2022 zählen nun zur Jahreswertung:
                        <ul>
                            <li>Schwabenkrieg-Erinnerungsschiessen</li>
                            <li>Feldschiessen (umgerechnet auf 25m wenn auf 50m geschossen)</li>
                            <li>Bundesprogramm 50m</li>
                            <li>Heimwettkampf</li>
                            <li>Matchfonds – Jeweils höchste Passe auf die P- und B-Scheibe</li>
                            <li>Fufzgerstich, höchste Passe (ehemals Goldstich)</li>
                            <li>Endstich – Ist bei Verhinderung am Endschiessen vorzuschiessen</li>
                        </ul>
                        Die aktuelle Rangliste der Jahresmeisterschaft hängt im Schiessstand aus.
                    </div>
            </section>
        </main>
    )
}