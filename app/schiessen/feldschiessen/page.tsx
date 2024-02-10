import { PageContent, Table, Document, FsInfo, Medium } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer } from "@/utils"
import PlanContainer from "@/components/PlanContainer"
import Gallery from "@/components/Gallery"

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