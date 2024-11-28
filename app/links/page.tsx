import ChapterTitle from "@/components/ChapterTitle"
import LinkGallery from "@/components/LinkGallery"
import Spacer from "@/components/Spacer"
import { LinkCollection, Medium, Metadata } from "@/interfaces"
import { pageMetadata } from "@/utils"
import React from "react"

async function getLinks(){
    const getLinks:Response = await fetch(
        'https://cms.pistolenclub-hallau.ch/api/content/items/linkCaollection?populate=100', //its spelled wrong yesyes I know
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
            next: {
                revalidate: 10,
            }
        }
    )

    const links:LinkCollection[] = await getLinks.json()
    return links
}

export async function generateMetadata(){
    return pageMetadata("Links")
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

export default async function Links(){

    const links:LinkCollection[] = await getLinks()
    const headerImage: Medium = await getHeaderImage("Links")

    return(
        <main className="main">
            <div className={"page_title"} style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE}${headerImage.path})`}}><span className={"page_title_inner"}><h1>Links</h1></span></div>
            <section className="section">
                {links.map(linkCategory=>{
                    return(
                        <React.Fragment key={linkCategory._id}>
                            <ChapterTitle title={linkCategory.title} />
                            <LinkGallery links={linkCategory.linkItem} />
                        </React.Fragment>
                    )
                })}
                <Spacer />
            </section>
        </main>
    )
}