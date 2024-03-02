import { Metadata } from "@/interfaces"
import P5025 from "./public/p5025.svg"
import P50 from "./public/p50.svg"
import P25 from "./public/p25.svg"
import G300 from "./public/g300.svg"

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
            icon: '/pch-logo32.png',
            shortcut: '/pch-logo96.png',
            apple: '/pch-logo180.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: '/pch-logo180.png',
            },
        },
    }
}

export function getShootingType(type:number, count: number){
    switch(type){
        case 1:
            return count === 1 ? "Obligatorische Übung" : "Obligatorische Übungen"
        case 2:
            return "Feldschiessen"
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
        if(item === "AG"){
            longArr.push("Aargau")
        }
        if(item === "AI"){
            longArr.push("Appenzell Innerrhoden")
        }
        if(item === "AR"){
            longArr.push("Appenzell Ausserrhoden")
        }
        if(item === "BE"){
            longArr.push("Bern")
        }
        if(item === "BL"){
            longArr.push("Basel-Landschaft")
        }
        if(item === "BS"){
            longArr.push("Basel-Stadt")
        }
        if(item === "FR"){
            longArr.push("Fribourg")
        }
        if(item === "GE"){
            longArr.push("Genf")
        }
        if(item === "GL"){
            longArr.push("Glarus")
        }
        if(item === "GR"){
            longArr.push("Graubünden")
        }
        if(item === "JU"){
            longArr.push("Jura")
        }
        if(item === "LU"){
            longArr.push("Luzern")
        }
        if(item === "NE"){
            longArr.push("Neuenburg")
        }
        if(item === "NW"){
            longArr.push("Nidwalden")
        }
        if(item === "OW"){
            longArr.push("Obwalden")
        }
        if(item === "SG"){
            longArr.push("St. Gallen")
        }
        if(item === "SH"){
            longArr.push("Schaffhausen")
        }
        if(item === "SO"){
            longArr.push("Solothurn")
        }
        if(item === "SZ"){
            longArr.push("Schwyz")
        }
        if(item === "TG"){
            longArr.push("Thurgau")
        }
        if(item === "TI"){
            longArr.push("Tessin")
        }
        if(item === "UR"){
            longArr.push("Uri")
        }
        if(item === "VD"){
            longArr.push("Waadt")
        }
        if(item === "VS"){
            longArr.push("Wallis")
        }
        if(item === "ZG"){
            longArr.push("Zug")
        }
        if(item === "ZH"){
            longArr.push("Zürich")
        }
    })
    return longArr.join(", ")
}

export function getDiscipline(disciplineType:string[]){
    const longArr:string[] = []
    disciplineType.forEach(type =>{
        if(type === "P50"){
            longArr.push("Pistole 50m")
        }
        if(type === "P25"){
            longArr.push("Pistole 25m")
        }
        if(type === "P25 + P50"){
            longArr.push("Pistole 25/50m")
        }
        if(type === "G300"){
            longArr.push("Gewehr 300m")
        }
    })
    console.log(longArr)
    return longArr.join(", ")
}

export function getIcon(type:string){
    if(type === "P50"){
        return P50
    }
    if(type === "P25"){
        return P25
    }
    if(type === "P25 + P50"){
        return P5025
    }
    if(type === "G300"){
      return G300
    }
    
}