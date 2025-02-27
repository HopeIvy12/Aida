//Sends the context to Pinecone from the crawler

import { NextResponse } from "next/server";
import { getContext } from "@/utils/context";
import { ScoredPineconeRecord } from "@pinecone-database/pinecone";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const lastMessage = messages.length > 1 ? messages[messages.length - 1] : messages[0]
        const context = await getContext(lastMessage.content, '', 10000, 0.7, false) as ScoredPineconeRecord[]
        return NextResponse.json({ context })
    } catch (e) {
        console.log(e)
        return NextResponse.error()
    }
}
