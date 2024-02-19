import ChapterTitle from "@/components/ChapterTitle"
import LinkGallery from "@/components/LinkGallery"
import Spacer from "@/components/Spacer"
import { LinkCollection } from "@/interfaces"
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

export default async function Links(){

    const links:LinkCollection[] = await getLinks()

    return(
        <main className="main">
            <section className="section">
                <h1>Links</h1>
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