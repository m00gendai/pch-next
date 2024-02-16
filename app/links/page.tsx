import ChapterTitle from "@/components/ChapterTitle"
import LinkGallery from "@/components/LinkGallery"
import { LinkCollection } from "@/interfaces"

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
                        <>
                        <ChapterTitle title={linkCategory.title} />
                        <LinkGallery links={linkCategory.linkItem} />
                        </>
                    )
                })}
            </section>
        </main>
    )
}