import ChapterTitle from "@/components/ChapterTitle"
import DocumentContainer from "@/components/DocumentContainer"
import Gallery from "@/components/Gallery"
import Spacer from "@/components/Spacer"
import TableContainer from "@/components/TableContainer"
import { PageContent, Table, Document, Medium, Metadata } from "@/interfaces"
import { innerTextReplacer, pageMetadata } from "@/utils"
import React from "react"

async function getPageContent(){
    const getPageContent:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/accessories?populate=100',
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
    return pageMetadata("Hilfsmittel")
  }

  async function getHeaderImage(page:string){
    const getMetadata: Response = await fetch(
      `https://cms.pistolenclub-hallau.ch/api/content/item/taglines?filter=%7Bpage%3A%22${page}%22%7D&populate=1`,
      {
          headers: {
              'api-key': `${process.env.CMS}`,
          },
      }
    )
    const metadata:Metadata = await getMetadata.json()
    return metadata.image
  }

export default async function Hilfsmittel(){

    const pageContent:PageContent[] = await getPageContent()
    const headerImage: Medium = await getHeaderImage("Hilfsmittel")

    return (
        <main className="main">
            <div className={"page_title"} style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE}${headerImage.path})`}}><span className={"page_title_inner"}><h1>Zugelassene Pistolen und Hilfsmittel</h1></span></div>
            <section className="section">
                
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