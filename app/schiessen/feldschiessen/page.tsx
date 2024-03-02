import { PageContent, Table, Document, FsInfo, Medium } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer, pageMetadata } from "@/utils"
import PlanContainer from "@/components/PlanContainer"
import Gallery from "@/components/Gallery"
import Spacer from "@/components/Spacer"
import React from "react"
import ShootingDays from "@/components/ShootingDays/ShootingDays"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/fs?populate=100',
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
            next: {
                revalidate: 10,
            }
        }
    )

    const pageContent:PageContent[] = await getPageContent.json()
    return pageContent
}

async function getFsInfo(){
    const getFsInfo:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/fsPlan?populate=100',
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
            next: {
                revalidate: 10,
            }
        }
    )

    const fsInfo:FsInfo[] = await getFsInfo.json()
    return fsInfo[0]
}

export async function generateMetadata(){
    return pageMetadata("Feldschiessen")
  }

export default async function FS(){

    const date:Date = new Date()
    const currentYear:number = date.getFullYear()
    const pageContent:PageContent[] = await getPageContent()
    const fsInfo:FsInfo = await getFsInfo()

    return (
        <main className="main">
            <section className="section">
                <h1>Feldschiessen</h1>
                <div className="chapter">
                    <div className="chapter_text" dangerouslySetInnerHTML={{__html: 
                        `Mitmachen kann jeder, der das zehnte Altersjahr erreicht hat – das heisst, im Jahre ${currentYear} dürfen bereits junge Schützen, die im Jahre ${currentYear-10} geboren sind, teilnehmen.
                        Dabei macht es keinen Unterschied, ob man das Licht der Welt am ersten Januar oder am 31. Dezember erblickt hat, es zählt der Jahrgang.
                        Eine Zugehörigkeit in einem Verein oder eine Lizenz des SSV ist nicht notwendig. Die Teilnahme ist gratis – dies beinhaltet auch die Munition.`}}>
                    </div>
                </div>
                <ChapterTitle title={fsInfo.title} />
                <div className="chapter">
                    <PlanContainer skesTimes={fsInfo}/>
                </div>
                <div className="chapter">
                    <div className="chapter_text" dangerouslySetInnerHTML={{__html: fsInfo.range.map }}>
                    </div>
                </div>
                <ShootingDays 
                    shootType={2}
                    canton={["SH"]} 
                    disciplineType={["P25", "P50", "P25 + P50"]}
                    />
                {pageContent.map(content=>{
                    return(
                        <React.Fragment key={content._id}>
                        {content.chapter.title && content.chapter.title.length !== 0 ? <ChapterTitle title={content.chapter.title} /> : null}
                        {content.chapter.content.map((elements, index) =>{
                            const text:string = elements.text
                            const tables:Table[] = elements.table
                            const docs:Document[] = elements.documents
                            const imgs:Medium[] = elements.images
                            
                            return(
                                <div className="chapter" key={`elements_${index}`}>
                                    {text && text.length !==0 && text[0] !== null ? <div className="chapter_text" dangerouslySetInnerHTML={{__html: innerTextReplacer(elements.text)}}></div> : null}
                                    {tables && tables.length !== 0 && tables[0] !== null ? <TableContainer table={elements.table} /> : null}
                                    {imgs && imgs.length !== 0 && imgs[0] !== null ? <Gallery images={imgs} /> : null}
                                    {docs && docs.length !== 0 && docs[0] !== null ? <DocumentContainer files={elements.documents} /> : null}
                                </div>
                            )
                        })}
                        </React.Fragment>
                    )
                })}
                <Spacer />
            </section>
        </main>
    )
}