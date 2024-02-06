import { PageContent, Document, Table } from "@/interfaces"
import { innerTextReplacer } from "@/utils"
import React from "react"
import DocumentContainer from "@/components/DocumentContainer"
import TableContainer from "@/components/TableContainer"
import ChapterTitle from "@/components/ChapterTitle"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/anlaesse?populate=100',
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

export default async function Anlaesse(){
    const pageContent:PageContent[] = await getPageContent()

    return (
        <main className="main">
            <section className="section">
                <h1>Anlässe</h1>
                {pageContent.map(content=>{
                    return(
                        <>
                        <ChapterTitle title={content.chapter.title} />
                        {content.chapter.content.map(elements =>{
                            const text:string = elements.text
                            const tables:Table[] = elements.table
                            const docs:Document[] = elements.documents
                            
                            return(
                                <div className="chapter">
                                {text && text.length !==0 ? <div className="chapter_text" dangerouslySetInnerHTML={{__html: innerTextReplacer(elements.text)}}></div> : null}
                                {tables && tables.length !== 0 ? <TableContainer table={elements.table} /> : null}
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