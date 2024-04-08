import { PageContent, Table, skesTimes, Document, Medium } from "@/interfaces";
import PlanContainer from "@/components/PlanContainer";
import ChapterTitle from "@/components/ChapterTitle";
import { innerTextReplacer, pageMetadata } from "@/utils";
import TableContainer from "@/components/TableContainer";
import DocumentContainer from "@/components/DocumentContainer";
import Gallery from "@/components/Gallery";
import React, { Suspense } from "react";
import Spacer from "@/components/Spacer";
import LoadingSkeleton from "@/components/loadingSkeleton";
import SkesResultContainer from "@/components/SkesResultContainer";

async function getSkesTimes(){
  const getSkesTimes:Response = await fetch(
      'https://cms.pistolenclub-hallau.ch/api/content/items/skesTimes?populate=100',
      {
          headers: {
              'api-key': `${process.env.CMS}`,
          },
          next: {
              revalidate: 10,
          }
      }
  )
  

  const skesTimes: skesTimes[] = await getSkesTimes.json()
  return skesTimes[0]
}

async function getPageContent(){
  const getPageContent:Response = await fetch(
      'https://cms.pistolenclub-hallau.ch/api/content/items/skes?populate=100',
      {
          headers: {
              'api-key': `${process.env.CMS}`,
          },
          next: {
              revalidate: 10,
          }
      }
  )
  

  const pageContent: PageContent[] = await getPageContent.json()
  return pageContent
}





export async function generateMetadata(){
  return pageMetadata("Schwabenkrieg-Erinnerungsschiessen")
}

export default async function SKES() {


  const skesTimes:skesTimes = await getSkesTimes()
  const pageContent:PageContent[] = await getPageContent()

  return (
    <main className="main">
      <section className="section">
        <h1>
          Schwaben
          <wbr />
          krieg-Erinnerungs
          <wbr />
          schiessen
        </h1>
        <div className="chapter">
          <div className="chapter_text" dangerouslySetInnerHTML={{__html: 
            `Zur Erinnerung an den Kampf in Hallau am 04. April 1499 findet
            alljährlich das Schwabenkrieg-Erinnerungsschiessen statt. Mit diesem
            Anlass wollen die Hallauer Gewehr- und Pistolenschützen das damalige
            Ereignis gebührend würdigen und zugleich allen Schützen von nah und
            fern eine Möglichkeit zum friedlichen Wettkampf bieten.`}}>
          </div>
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <SkesResultContainer />
        </Suspense>
        
        <ChapterTitle title={skesTimes.title} />
        <div className="chapter">
          <PlanContainer skesTimes={skesTimes}/>
        </div>
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