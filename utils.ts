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