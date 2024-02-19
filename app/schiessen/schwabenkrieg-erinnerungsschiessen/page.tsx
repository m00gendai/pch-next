import { PageContent, Table, skesTimes, Document, Medium, DirectoryResponse, Directory, FileResponse } from "@/interfaces";
import PlanContainer from "@/components/PlanContainer";
import ChapterTitle from "@/components/ChapterTitle";
import { innerTextReplacer } from "@/utils";
import TableContainer from "@/components/TableContainer";
import DocumentContainer from "@/components/DocumentContainer";
import Gallery from "@/components/Gallery";
import revalidate from "@/app/actions/revalidate";
import React from "react";
import LinkContainer from "@/components/LinkContainer";
import Spacer from "@/components/Spacer";

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

async function getDirs(){
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  // searches all folders with {currentYear} as directory name and includes the directory path (to extract the parent directory name easier)
  const getYearDirectoryList:Response = await fetch(
      `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/search?with=path&directory_id=${process.env.SKES}&depth=unlimited&types[]=dir&query="${currentYear}"&per_page=1000`,
      {
          method: "GET",
          headers: {
              Authorization: `Bearer ${process.env.KDRIVE}`,
              "Content-Type": "application/json",
          },
          next: {
            tags: ["resultDirs"]
          }
      }
  );
  
  const yearDirectoryList:DirectoryResponse = await getYearDirectoryList.json();
if(yearDirectoryList.data.length === 0){
  return yearDirectoryList.data
}
  // sorts the year folders by last_modified_at (latest first)
  const sortedYearDirectoryList:Directory[] = yearDirectoryList.data.sort((a:Directory, b:Directory) => {
      const x:number = a.added_at;
      const y:number = b.added_at;
      return x < y ? 1 : x > y ? -1 : 0;
  })

  return sortedYearDirectoryList
}

async function getFiles(sortedYearDirectoryList:Directory[]){
  // gets all files within the year directories
  
  const fileList:FileResponse[] = await Promise.all(sortedYearDirectoryList.map(async directory =>{
      const getFiles:Response = await fetch(
          `https://api.infomaniak.com/2/drive/${process.env.DRIVE}/files/${directory.id}/files`,
          {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${process.env.KDRIVE}`,
                  "Content-Type": "application/json",
              },
              next: {
                tags: ["resultFiles"]
              }
          }
      );
          const files:FileResponse = await getFiles.json();
          return files
  }))
  return fileList
}

export default async function SKES() {

  revalidate("ResultDirs")
  revalidate("ResultFiles")
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();

  const sortedYearDirectoryList:Directory[] = await getDirs()
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
        {
          sortedYearDirectoryList.length == 0 
          ? 
          null
          :
          sortedYearDirectoryList.map(async (years:Directory) => {
            const fileList:FileResponse[] = await getFiles(sortedYearDirectoryList)
            return (
              <React.Fragment key={`fragment_${years.id}`}>
                <ChapterTitle title={`Resultate ${currentYear}`} />
                <LinkContainer fileList={fileList} year={years.id}/>
              </React.Fragment>
            );
          })
        }
        
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