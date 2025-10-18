import connectMongoDB from "@/lib/mongodb"
import Project from "@/models/Project"
import { NextResponse } from "next/server"


export async function GET() {
    try {
       await  connectMongoDB()
       const projects = await Project.find().sort({createdAt: -1})
       return NextResponse.json(projects, {status:200})
        
    } catch (error) {
        console.error('error occured: ',error)
        return NextResponse.json({message:'fail to fetch products'},{status:500})
    }
}