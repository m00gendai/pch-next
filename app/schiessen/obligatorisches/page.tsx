import Link from "next/link"
import Image from "next/image"
import { PageContent, Table, Document, Medium } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer } from "@/utils"
import TextImageContainer from "@/components/TextImageContainer"
import Gallery from "@/components/Gallery"

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
                {pageContent.map(content=>{
                    return(
                        <>
                        <ChapterTitle title={content.chapter.title} />
                        {content.chapter.content.map(elements =>{
                            const text:string = elements.text
                            const tables:Table[] = elements.table
                            const docs:Document[] = elements.documents
                            const imgs:Medium[] = elements.images
                            
                            return(
                                <div className="chapter">
                                {text && text.length !==0 ? <div className="chapter_text" dangerouslySetInnerHTML={{__html: innerTextReplacer(elements.text)}}></div> : null}
                                {tables && tables.length !== 0 ? <TableContainer table={elements.table} /> : null}
                                {docs && docs.length !== 0 ? <DocumentContainer files={elements.documents} /> : null}
                                {imgs && imgs.length !== 0 ? <Gallery images={imgs} /> : null}
                                </div>
                            )
                        }
                            )}
                        </>
                    )
                    
                })}
            </section>
        </main>
    )
}