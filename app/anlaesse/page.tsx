import { PageContent } from "@/interfaces"
import { innerTextReplacer } from "@/utils"
import React from "react"
import DocumentContainer from "@/components/DocumentContainer"
import TableContainer from "@/components/TableContainer"

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
                        <h2>{content.chapter.title}</h2>
                        {content.chapter.content.map(elements =>{
                            return(
                                <div className="chapter">
                                {elements.text ? <div className="chapter_text" dangerouslySetInnerHTML={{__html: innerTextReplacer(elements.text)}}></div> : null}
                                {elements.table ? <TableContainer table={elements.table} /> : null}
                                {elements.documents ? <DocumentContainer files={elements.documents} /> : null}
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