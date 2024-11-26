import { Medium, Metadata } from "@/interfaces"
import { pageMetadata } from "@/utils"

export async function generateMetadata(){
    return pageMetadata("error")
  }

  export async function getHeaderImage(page:string){
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

export default async function NotFound(){
    const headerImage: Medium = await getHeaderImage("error")


    return(
        <main className="main">
            <div className={"page_title"} style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE}${headerImage.path})`}}><span className={"page_title_inner"}><h1>Seite nicht gefunden</h1></span></div>
            <section className="section">
                <div style={{width: "90%", maxWidth: "1500px", textAlign: "justify", textJustify: "inter-word"}}>
    {`Diçka shkoi keq, kjo faqe nuk ekziston.
    Zerbait gaizki atera da, orrialde hau ez dago.
    Што-то пайшло не так, гэтай старонкі няма.
    Nešto je pošlo po zlu, ova stranica ne postoji.
    Нещо се обърка, тази страница не съществува.
    Alguna cosa ha anat malament, aquesta pàgina no existeix.
    Nešto je pošlo po zlu, ova stranica ne postoji.
    Něco se pokazilo, tato stránka neexistuje.
    Noget gik galt, denne side eksisterer ikke.
    Er is iets misgegaan, deze pagina bestaat niet.
    Mae ceiliad a gath, le iôn hon nad adab.
    Something went wrong, this page does not exist.
    Midagi läks valesti, see leht ei eksisteeri.
    Jotain meni pieleen, tämä sivu ei ole olemassa.
    Quelque chose s'est mal passé, cette page n'existe pas.
    Algo saiu mal, esta páxina non existe.`}
    <span style={{color: "red"}}>{` Da ging was schief, diese Seite existiert nicht. `}</span>
    {`Κάτι πήγε στραβά, αυτή η σελίδα δεν υπάρχει.
    Valami félrement, ez az oldal nem létezik.
    Eitthvað fór úrskeiðis, þessi síða er ekki til.
    Thit rud amach, níl an leathanach seo ann.
    Qualcosa è andato storto, questa pagina non esiste.
    vItlhutlhDaq qatlh, pongDI' vItlhutlh.
    Kaut kas nogāja greizi, šī lapa neeksistē.
    Kažkas nutiko negerai, šis puslapis neegzistuoja.
    Нешто не е во ред, оваа страница не постои.
    Xi ħaġa ma saretx sew, din il-paġna ma teżistix.
    Noe gikk galt, denne siden eksisterer ikke.
    Coś poszło nie tak, ta strona nie istnieje.
    Algo correu mal, esta página não existe.
    Ceva nu a mers bine, această pagină nu există.
    Что-то пошло не так, эта страница не существует.
    Нешто је пошло по злу, ова страница не постоји.
    Niečo sa pokazilo, táto stránka neexistuje.
    Nekaj je šlo narobe, ta stran ne obst.`}
                </div>
                </section>
        </main>
 
    )
}