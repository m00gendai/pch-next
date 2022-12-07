import Link from "next/link"
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from "../styles/Verein.module.css"
import c from "../styles/Contact_Form.module.css"
import { vorstand } from "../lib/vorstand"
import { useRouter } from 'next/router'

export default function Verein(){
    
    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [response, setResponse] = useState("")
    const [responseState, setResponseState] = useState("green")

    const handleSubmit = (e) => {
        e.preventDefault()
        setResponse("Wird bearbeitet...")
        setResponseState("black")
        let data = {
            name,
            email,
            message
        }

    if(data.name == "" || data.email == "" || data.message == ""){
        setResponse("Bitte alle Felder ausfüllen")
        setResponseState("red")
        return
    }

    if(!data.email.includes("@")){
        setResponse("Bitte eine E-Mail-Adresse angeben")
        setResponseState("red")
        return
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(async (res) => {
        if (res.status === 200) {
            setResponse("Nachricht erfolgreich übermittelt. Sie haben auch eine Kopie erhalten.")
            setResponseState("green")
            setSubmitted(true) 
        } else {
            const errmsg = await res.json()
            setResponse(`
                Es ist etwas schiefgegangen. Bitte überprüfen Sie insbesondere Ihre angegebene E-Mail-Adresse. Ansonsten wenden SIe sich an die im Impressum angegebene Kontaktmöglichkeit.
                

                Fehler: ${res.status} 
                Meldung ${errmsg.err}
            `)
            setResponseState("red")
            setSubmitted(false) 
        }
    })
  }

    return(
        <main className="main">
            <Header title={"PC Hallau - Verein"} content={"Unser Verein"} url={headUrl} />
            <section className="section">
                <h1>Verein</h1>
                <h2>Über uns</h2>
                    <div className={s.container}>
                        <p>
                            An der Hauptversammlung kurz vor Weihnachten 1984 wurden die Statuten des Pistolenclub Hallau genehmigt, 
                            somit kann dies als Geburtsstunde unseres Vereines angesehen werden. 
                            Davor waren wir als Hallauer Pistolen- und Revolversektion bekannt.
                        </p>
                        <p>
                            Im Jahre 2022 zählt unser Verein 21 Aktive Mitglieder, sowie fünf B- und sieben Passivmitglieder, von Jahrgang 1940 bis 2003.
                        </p>
                    </div>
                    <div className={s.linkContainer}>
                        <Link href="/mitmachen" className={s.link}>
                            <span className={s.text}>
                                Mitmachen!
                            </span>
                        </Link>
                        <Link href="/Statuten_PC-Hallau.pdf" target="_blank" className={s.link}>
                            <span className={s.text}>
                                Vereinsstatuten
                            </span>
                        </Link>
                    </div>
                    <div className={s.imageContainer}>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_1.jpg"}`
                        }}></div>
                       <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_2.jpg"}`
                        }}></div>
                        <div className={s.image} style={{
                            backgroundImage: `url(${"/verein_3.jpg"}`
                        }}></div>
                    </div>
                <h2>Standort</h2>
                    <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33736.67947464168!2d8.407849476536148!3d47.69399698993076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906354ca4a1cff%3A0x536015ac331fdba8!2sSchiessanlage%20Waatelen!5e1!3m2!1sen!2sch!4v1668826709576!5m2!1sen!2sch" />
                <h2>Vorstand</h2>
                    <div className={s.vorstandContainer}>
                        {
                        vorstand.map((entry, index) =>{
                            return(
                                <div
                                    className={s.vorstand} 
                                    key={`vorstand_${index}`}
                                >
                                    <span className={s.vorstandTitle}>{entry.title}</span>
                                    <span className={s.vorstandText}>{entry.name}</span>
                                    <span className={s.vorstandText}>{entry.addn}</span>
                                </div>

                            )
                        })
                        }
                    </div>
                <h2>Kontaktformular</h2>
                <div className={c.container}>
                    <form className={c.form}>  
                        <div className={c.row2}>
                            <TextField 
                                fullWidth
                                id="outlined-name" 
                                label="Name" 
                                type="text" 
                                required
                                onChange={(e)=>{setName(e.target.value)}}
                                color="success"
                            />
                            <TextField 
                                fullWidth
                                id="outlined-mail" 
                                label="E-Mail" 
                                type="email" 
                                required
                                onChange={(e)=>{setEmail(e.target.value)}}
                                color="success"
                            />
                        </div>
                        <div className={c.row1}>
                            <TextField 
                                fullWidth
                                id="outlined-message" 
                                label="Ihre Nachricht" 
                                type="text"
                                multiline
                                required
                                rows={5}
                                onChange={(e)=>{setMessage(e.target.value)}}
                                color="success"
                            />
                        </div>
                        <div className={c.row1}>
                            <Button 
                                variant="contained"
                                type="submit"
                                onClick={(e)=>{handleSubmit(e)}}
                                sx={{
                                    background: "linear-gradient(135deg, rgba(12, 197, 73, 1) 0%, rgba(0, 128, 0, 1) 100%);"
                                }}
                            >
                                Absenden
                            </Button>
                        </div>
                    </form >
                    <div className={c.message} style={{color: responseState}}>{response}</div>
                </div>
            </section>
        </main>
    )
}