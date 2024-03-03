"use server"

import { cookies } from "next/headers";

export default async function setThatCookie(name:string, value:string){
    cookies().set(name, value)
}