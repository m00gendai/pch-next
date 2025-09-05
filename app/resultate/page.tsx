import React, { Suspense } from "react";
import Archive from "@/components/Archive";
import Spacer from "@/components/Spacer";
import { pageMetadata } from "@/utils";
import LoadingSkeleton from "@/components/loadingSkeleton";
import { Medium, Metadata } from "@/interfaces"
import ResultContainer from "@/components/ResultContainer";


export const dynamic = 'force-dynamic'


export async function generateMetadata(){
  return pageMetadata("Resultate")
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

export default async function Resultate() {
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();  
  const headerImage: Medium = await getHeaderImage("Resultate")

  return (
    <main className="main">
       <div className={"page_title"} style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE}${headerImage.path})`}}><span className={"page_title_inner"}><h1>Resultate</h1></span></div>
      <section className="section">
       
        <div className="chapter">
          <div className="chapter_text" dangerouslySetInnerHTML={{__html: 
            `Hier sind alle Resultate der auswärtigen Schiessen für das aktuelle
            Jahr ${currentYear} aufgelistet. 
            Ältere Resultate vergangener Jahre finden sich im Archiv am Ende der Seite. 
            Die Resultate sind nach Aktualität geordnet.`}}>
          </div>
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <ResultContainer />
        </Suspense>
        <Archive />
        <Spacer />
      </section>
    </main>
  );
}