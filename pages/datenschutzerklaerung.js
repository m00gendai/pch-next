import Link from "next/link"
import Header from "../components/header"
import { useRouter } from 'next/router'
import s from "../styles/Datenschutzerklaerung.module.css"

export default function Links(){

    const router = useRouter()
    const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`

    return(
        <main className="main">
            <Header title={"PC Hallau - Datenschutzerklärung"} content={"Unsere DSGVO-konforme Datenschutzerklärung"} url={headUrl} />
            <section className="section">
                <h1>Datenschutzerklärung</h1>
                <div className={s.container}>
<p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
<br />
<p>Marcel Weber</p>
<p>8215 Hallau</p>
<p>Schweiz</p>
<p>mrweber@gmx.ch</p>
<br />
<p>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</p>
<br />

<p>Im Falle datenschutzrechtlicher Verstösse steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB). Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden:</p>
<u><em><Link className={s.link} target="_blank" href="https://www.edoeb.admin.ch/edoeb/de/home/der-edoeb/links/datenschutz---schweiz.html" rel="noopener noreferrer">EDOEB</Link></em></u>

<h2>Ihre Betroffenenrechte</h2>

<p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
<ul>
<li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
<li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
<li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
<li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
<li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
<li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
</ul>
<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
<br />
<p>Sie können sich jederzeit mit einer Beschwerde an die Aufsichtsbehörde wenden:</p>
<u><em><Link className={s.link} target="_blank" href="https://www.edoeb.admin.ch/edoeb/de/home/der-edoeb/kontakt.html" rel="nofollow noopener noreferrer">EDOEB</Link></em></u>.

<h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>

<strong className={s.strong}>Art und Zweck der Verarbeitung:</strong>
<p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
<br />
<p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
<ul>
<li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
<li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
<li>Auswertung der Systemsicherheit und -stabilität sowie</li>
<li>zu weiteren administrativen Zwecken.</li>
</ul>
<p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>

<strong className={s.strong}>Rechtsgrundlage:</strong>
<p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>

<strong className={s.strong}>Empfänger:</strong>
<p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>

<strong className={s.strong}>Speicherdauer:</strong>
<p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>

<strong className={s.strong}>Bereitstellung vorgeschrieben oder erforderlich:</strong>
<p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.</p> 

<h2>Kontaktformular</h2>

<strong className={s.strong}>Art und Zweck der Verarbeitung:</strong>
<p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>



<strong className={s.strong}>Rechtsgrundlage:</strong>
<p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
<p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>



<strong className={s.strong}>Empfänger:</strong>
<p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>



<strong className={s.strong}>Speicherdauer:</strong>
<p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen. </p>



<strong className={s.strong}>Bereitstellung vorgeschrieben oder erforderlich:</strong>
<p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>



<h2>Verwendung von Google Analytics</h2>

<strong className={s.strong}>Art und Zweck der Verarbeitung:</strong>
<p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.</p>



<strong className={s.strong}>Rechtsgrundlage:</strong>
<p>Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).</p>



<strong className={s.strong}>Empfänger:</strong>
<p>Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.</p>



<strong className={s.strong}>Speicherdauer:</strong>
<p>Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.</p>



<strong className={s.strong}>Drittlandtransfer:</strong>
<p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen.</p> <u><em><Link className={s.link} target="_blank" href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</Link></em></u>. 



<strong className={s.strong}>Bereitstellung vorgeschrieben oder erforderlich:</strong>
<p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>



<strong className={s.strong}>Widerruf der Einwilligung:</strong>
<p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: </p>
<u><em><Link className={s.link} target="_blank" href="http://tools.google.com/dlpage/gaoptout?hl=de">Browser Add On zur Deaktivierung von Google Analytics</Link></em></u>.
<p>Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie </p><u><em><Link className={s.link} target="_blank" title="Google Analytics Opt-Out-Cookie setzen" onClick={()=>{gaOptout();alert('Google Analytics wurde deaktiviert');}} href="#">diesen Link anklicken</Link></em></u><p>. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.</p>



<strong className={s.strong}>Profiling:</strong>
<p>Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.</p>



<h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>

<strong className={s.strong}>Art und Zweck der Verarbeitung:</strong>
<p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier:</p> <u><em><Link className={s.link} target="_blank" href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</Link></em></u>



<strong className={s.strong}>Rechtsgrundlage:</strong>
<p>Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). </p>



<strong className={s.strong}>Empfänger:</strong>
<p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.</p>



<strong className={s.strong}>Speicherdauer:</strong>
<p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.
Weitere Informationen zu Google Web Fonts finden Sie unter </p><u><em><Link className={s.link} target="_blank" href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</Link></em></u> <p>und in der Datenschutzerklärung von Google: </p><u><em><Link className={s.link} target="_blank" href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</Link></em></u><p>.</p>



<strong className={s.strong}>Drittlandtransfer:</strong>
<p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen </p><u><em><Link className={s.link} target="_blank" href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</Link></em></u>.



<strong className={s.strong}>Bereitstellung vorgeschrieben oder erforderlich:</strong>
<p>Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ohne die korrekte Darstellung der Inhalte von Standardschriften nicht ermöglicht werden.</p>



<strong className={s.strong}>Widerruf der Einwilligung:</strong>
<p>Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen Einbindung JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.</p>



<h2>Verwendung von Google Maps</h2>

<strong className={s.strong}>Art und Zweck der Verarbeitung:</strong>
<p>Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.
Nähere Informationen über die Datenverarbeitung durch Google können Sie </p><u><em><Link className={s.link} target="_blank" href="http://www.google.com/privacypolicy.html">den Google-Datenschutzhinweisen</Link></em></u><p> entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten</p><u><em><Link className={s.link} target="_blank" href="http://www.dataliberation.org/"> finden Sie hier</Link></em></u><p>.</p>



<strong className={s.strong}>Rechtsgrundlage:</strong>
<p>Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>



<strong className={s.strong}>Empfänger:</strong>
<p>Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.
Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Webseite zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.</p>



<strong className={s.strong}>Speicherdauer:</strong>
<p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps.</p>



<strong className={s.strong}>Drittlandtransfer:</strong>
<p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen </p><u><em><Link className={s.link} target="_blank" href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</Link></em></u><p>.</p>



<strong className={s.strong}>Widerruf der Einwilligung:</strong>
<p>Wenn Sie nicht möchten, dass Google über unseren Internetauftritt Daten über Sie erhebt, verarbeitet oder nutzt, können Sie in Ihrem Browsereinstellungen JavaScript deaktivieren. In diesem Fall können Sie unsere Webseite jedoch nicht oder nur eingeschränkt nutzen.</p>



<strong className={s.strong}>Bereitstellung vorgeschrieben oder erforderlich:</strong>
<p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>



<h2>SSL-Verschlüsselung</h2>

<p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>



<h2>Änderung unserer Datenschutzbestimmungen</h2>

<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>



<h2>Fragen an den Datenschutzbeauftragten</h2>

<p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
<br />
<br />
<p>Marcel Weber</p>
<p>8215 Hallau</p>
<p>Schweiz</p>
<p>mrweber@gmx.ch</p>

<p><em>Die Datenschutzerklärung wurde mit dem </em></p><em><u><Link className={s.link} target="_blank" href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/" rel="noopener noreferrer">Datenschutzerklärungs-Generator der activeMind AG erstellt</Link></u></em><p>(Version 2018-09-24).</p>

</div>

            </section>
        </main>
    )
}