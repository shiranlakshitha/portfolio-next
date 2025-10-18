import connectMongoDB from "@/lib/mongodb"
import Timeline from "@/models/Timeline"
import { NextResponse } from "next/server"


export async function GET() {
    try {
        await connectMongoDB()
        const timeline = await Timeline.find()
        return NextResponse.json(timeline, {status: 200})
    } catch (error) {
        console.error('error fetching data: ', error)
        return NextResponse.json({message: 'data fetching failed'},{status: 500})
    }
}