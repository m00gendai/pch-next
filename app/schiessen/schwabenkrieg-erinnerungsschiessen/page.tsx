import { PageContent, Table, skesTimes, Document, Medium } from "@/interfaces";
import PlanContainer from "@/components/PlanContainer";
import ChapterTitle from "@/components/ChapterTitle";
import { innerTextReplacer } from "@/utils";
import TableContainer from "@/components/TableContainer";
import DocumentContainer from "@/components/DocumentContainer";

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
        <ChapterTitle title={skesTimes.title} />
        <div className="chapter">
          <PlanContainer skesTimes={skesTimes}/>
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
                            
                                </div>
                            )
                        }
                            )}
                        </>
                    )
                    
                })}
      </section>
    </main>
  );
}