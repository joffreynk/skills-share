import {NextResponse} from 'next/server'

import post from "@/models/postModel.js"
import connection from "@/utils/db.js"

export const GET = async(req, res)=>{
  try {
    await connection()

    const posts = post.find()

    return new NextResponse(posts, {status: 200})
    
  } catch (error) {
    return new NextResponse('Failed to interact with database', {status: 500})
  }
}