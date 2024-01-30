import Navbar from "@/components/navbar"
import Navbar_Mobile from "@/components/navbar_mobile"
import Footer from "@/components/footer"
import "@/styles/globals.css"

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <html lang="de">
            <body>
                <Navbar_Mobile />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}