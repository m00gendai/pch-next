import { PageContent, Table, Document, Medium, Board } from "@/interfaces"
import ChapterTitle from "@/components/ChapterTitle"
import TableContainer from "@/components/TableContainer"
import DocumentContainer from "@/components/DocumentContainer"
import { innerTextReplacer } from "@/utils"
import Gallery from "@/components/Gallery"
import BoardMember from "@/components/BoardMember"
import BoardContainer from "@/components/BoardContainer"
import ContactForm from "@/components/ContactForm/ContactForm"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/club?populate=100',
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

async function getBoard(){
    const getBoard:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/board?populate=100',
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
            next: {
                revalidate: 10,
            }
        }
    )

    const board:Board[] = await getBoard.json()
    return board
}


export default async function Verein(){

    const pageContent:PageContent[] = await getPageContent()
    const board:Board[] = await getBoard()

    return(
        <main className="main">
            <section className="section">
                <h1>Verein</h1>
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
                                {imgs && imgs.length !== 0 ? <Gallery images={imgs} /> : null}
                                {docs && docs.length !== 0 ? <DocumentContainer files={elements.documents} /> : null}
                                </div>
                            )
                        }
                            )}
                        </>
                    )
                    
                })}
                <ChapterTitle title={"Kontakt"} />
                <ContactForm />
                <ChapterTitle title={"Vorstand"} />
                <BoardContainer board={board} />
                
            </section>
        </main>
    )
}