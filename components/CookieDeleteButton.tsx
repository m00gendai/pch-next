"use client"

import deleteCookie from "@/app/actions/cookieDelete"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"

interface Props{
    cookie: string
}

function handleClick(router:AppRouterInstance, cookie:string){
    
    deleteCookie(cookie)
    router.refresh()
}

export default function CookieDeleteButton({cookie}:Props){
    const router:AppRouterInstance = useRouter()
    return(
        <button onClick={()=>handleClick(router, cookie)}>Cookie löschen</button>
    )
}