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