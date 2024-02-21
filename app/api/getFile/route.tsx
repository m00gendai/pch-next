import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const data = await req.json()

    const getUrl: Response = await fetch(`https://api.infomaniak.com/2/drive/608492/files/${data.id}/temporary_url`,{
        method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.KDRIVE}`,
                "Content-Type" : "application/json",
            },
        })
    const url = await getUrl.json()
    return Response.json(url)
}