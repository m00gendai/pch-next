import Header from "../components/header"
import s from "../styles/Errorpage.module.css"

export default function Custom404() {

    return (
        <main className="main">
        <Header title={"PC Hallau - Seite nicht gefunden"} content={"Diese Seite existiert leider nicht"} url={"https://pistolenclub-hallau.ch/404"} />
            <section className="section">
                <h1>Fehler 404:</h1>
                <div className={s.container}>
                    <div className={s.textContainer}>
                        <p>Die aufgerufene Seite existiert leider nicht.</p>
                    </div>
                </div>
            </section>
        </main>
    
    )
}