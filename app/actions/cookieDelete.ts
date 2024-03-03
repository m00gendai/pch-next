"use server"

import { cookies, headers } from "next/headers";

export default async function deleteCookie(name:string){

    const headerList = headers()
    const domain:string = headerList.get("host") || ""
    cookies().set({
        name: "",
        value: "",
        maxAge: 0,
        domain: `.${domain}`
    })
}