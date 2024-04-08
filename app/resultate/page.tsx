import React, { Suspense } from "react";
import Archive from "@/components/Archive";
import Spacer from "@/components/Spacer";
import { pageMetadata } from "@/utils";
import LoadingSkeleton from "@/components/loadingSkeleton";
import ResultContainer from "@/components/ResultContainer";





export async function generateMetadata(){
  return pageMetadata("Resultate")
}

export default async function Resultate() {
  
  const date:Date = new Date();
  const currentYear:number = date.getFullYear();  

  return (
    <main className="main">
      <section className="section">
        <h1>Resultate</h1>
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