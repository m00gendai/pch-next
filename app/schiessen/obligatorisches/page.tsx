import { PageContent, Table, Document, Medium } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer, pageMetadata } from "@/utils"
import Gallery from "@/components/Gallery"
import Spacer from "@/components/Spacer"
import React from "react"
import ShootingDays from "@/components/ShootingDays/ShootingDays"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/obli?populate=100',
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

export async function generateMetadata(){
    return pageMetadata("Obligatorisches")
  }

export default async function Obli(){

    const pageContent:PageContent[] = await getPageContent()

    return (
        <main className="main">
            <section className="section">
                <h1>Obligatorisches</h1>
                <div className="chapter">
                    <div className="chapter_text" dangerouslySetInnerHTML={{__html: 
                        `Auch mit der Pistole wird das Obligatorische geschossen. 
                        Sei es als aktiver Offizier in der Armee oder als Teil der Jahresmeisterschaft des Pistolenclubs. 
                        Da wir nur einen 50m-Stand haben, das Obligatorische aber offiziell nur auf 25m „anerkannt“ wird, gilt jenes auf 50m nicht für Angehörige der Armee. 
                        Daher gibt es auch keine Mindestpunktzahl, um das Obligatorische zu bestehen.`}}>
                    </div>
                </div>
                <ChapterTitle title={`Schiessdaten`} />
                <ShootingDays 
                    shootType={1}
                    canton={["SH"]} 
                    disciplineType={["P25", "P50"]}
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