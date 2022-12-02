import Link from "next/link"
import Head from "next/head"
import { useState } from "react"
import s from "../styles/Verein.module.css"
import { vorstand } from "../lib/vorstand"

/*
  Code for the contact form shamelessly stolen, taken, mugged, thieved, looted, pilfered, appropriated, robbed, raided, burgled,
  embezzled and snatched from 
  https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645 
*/

export default function Verein(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

    return(
        <main className="main">
            <Head>
                <title>PCH Verein</title>
                <meta name="description" content="Pistolenclub Hallau Verein" />
                <link rel="icon" href="/pch-logo.png" />
            </Head>
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
                <div >
  < form >  
    < label htmlFor='name'>Name</label>
    < input type='text' name='name' onChange={(e)=>{setName(e.target.value)}} />  

    < label htmlFor='email'>Email</label>
    < input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} />

    < label htmlFor='message'>Message</label>
    < input type='text' name='message' onChange={(e)=>{setMessage(e.target.value)}} />
   < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
  </form >
</div>
            </section>
        </main>
    )
}