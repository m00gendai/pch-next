import { Metadata } from "@/interfaces"

const date:Date = new Date()

export function convertDate(inputDate:string){
    const date:Date = new Date(inputDate)
    const options: Intl.DateTimeFormatOptions ={
        weekday: "long", 
        month: "long", 
        year: "numeric", 
        day: "2-digit"
    }    

    return date.toLocaleDateString("de-CH", options)   
}

export function innerTextReplacer(text:string){
    return text.replaceAll("{{currentYear}}", `${date.getFullYear()}`)
}

export function toRGB(hex: string) {
    const r:number = parseInt(hex.slice(1, 3), 16);
    const g:number = parseInt(hex.slice(3, 5), 16);
    const b:number = parseInt(hex.slice(5, 7), 16);
    const rgb:string = `${r},${g},${b}`;
    return rgb;
  }

export function gradientPlaceholder(rgb:string[]){
    const style:React.CSSProperties = {
        background: `
            linear-gradient(72deg, rgba(${rgb[0]},0.8), rgba(${rgb[0]}, 0) 70.71%), 
            linear-gradient(144deg, rgba(${rgb[1]},0.8), rgba(${rgb[1]}, 0) 70.71%),
            linear-gradient(216deg, rgba(${rgb[2]},0.8), rgba(${rgb[2]}, 0) 70.71%),
            linear-gradient(288deg, rgba(${rgb[3]},0.8), rgba(${rgb[3]}, 0) 70.71%),
            linear-gradient(360deg, rgba(${rgb[4]},0.8), rgba(${rgb[4]}, 0) 70.71%)
            `,
    }
    return style
}

export async function pageMetadata(pageName:string){
    const getMetadata: Response = await fetch(
        `https://cms.pistolenclub-hallau.ch/api/content/item/taglines?filter=%7Bpage%3A%22${pageName}%22%7D&populate=1`,
        {
            headers: {
                'api-key': `${process.env.CMS}`,
            },
        }
    )
    const metadata:Metadata = await getMetadata.json()

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            images: [
                {
                    url: metadata.image ? `${process.env.NEXT_PUBLIC_STORAGE}${metadata.image.path}` : "./sd_mrweber3.jpg",
                }
            ],
            locale: 'de_CH',
            type: 'website',
        },
        icons: {
            icon: '/pch-logo.png',
            shortcut: 'pch-logo.png',
            apple: 'pch-logo.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: 'pch-logo.png',
            },
        },
    }
}

export function getShootingType(type:number){
    switch(type){
        case 1:
            return "die Obligatorischen Übungen"
        case 2:
            return "das Feldschiessen"
        case 3:
            return "die Jungschützenkurse"
        case 4:
            return "Schützenfeste und Vereinswettkämpfe"
        case 5:
            return "Trainings"
        case 6: 
            return "anderweitige Anlässe"
    }
}

export function getCanton(canton:string[]){
    const longArr:string[] = []
    canton.forEach(item=>{
        if(item === "SH"){
            longArr.push("Schaffhausen")
        }
        if(item === "ZH"){
            longArr.push("Zürich")
        }
    })
    return longArr.join(", ")
}