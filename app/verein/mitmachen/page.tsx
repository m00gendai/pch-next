import { PageContent, Table, Document, Medium, Board } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import Gallery from "@/components/Gallery"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer } from "@/utils"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/join?populate=100',
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


export default async function Mitmachen(){

    const pageContent:PageContent[] = await getPageContent()

    return(
        <main className="main">
            <section className="section">
                <h1>Mitmachen</h1>
                {pageContent.map(content=>{
                    return(
                        <>
                        {content.chapter.title && content.chapter.title.length !== 0 ? <ChapterTitle title={content.chapter.title} /> : null}
                        {content.chapter.content.map(elements =>{
                            const text:string = elements.text
                            const tables:Table[] = elements.table
                            const docs:Document[] = elements.documents
                            const imgs:Medium[] = elements.images
                            
                            return(
                                <div className="chapter">
                                {text && text.length !==0 ? <div className="chapter_text" dangerouslySetInnerHTML={{__html: innerTextReplacer(elements.text)}}></div> : null}
                                {tables && tables.length !== 0 ? <TableContainer table={elements.table} /> : null}
                                {imgs && imgs.length !== 0 ? <Gallery images={imgs} /> : null}
                                {docs && docs.length !== 0 ? <DocumentContainer files={elements.documents} /> : null}
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