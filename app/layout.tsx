import CookieBanner from "@/components/Cookies/CookieBanner"
import Navbar from "@/components/Navbar/navbar"
import Navbar_Mobile from "@/components/Navbar/navbar_mobile"
import Footer from "@/components/footer"
import "@/styles/globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { cookies } from "next/headers"

export default function RootLayout({children}:{children:React.ReactNode}){
   const analyticsAllowed:string | undefined = cookies().get("pchallau_analytics")?.value

    return(
        <html lang="de">
            <body>
                <Navbar_Mobile />
                <Navbar />
                {children}
                <Footer />
                {analyticsAllowed === undefined ? <CookieBanner /> : null}
                {analyticsAllowed === "true" ? <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA}`} /> : null}
            </body>
        </html>
    )
}