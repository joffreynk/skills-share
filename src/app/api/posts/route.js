import {NextResponse} from 'next/server'

import post from "@/models/postModel.js"
import connection from "@/utils/db.js"

export const GET = async(req, res)=>{
  const url = new URL(req.url)
  const username = url.searchParams.get('username')
  try {
    await connection()

    const posts = await post.find(username && { username})

    return new NextResponse(JSON.stringify(posts), {status: 201})
    
  } catch (error) {
    return new NextResponse('Failed to interact with database', {status: 500})
  }
}

export const POST = async(req, res)=>{

  const body = await req.json();
  const newpost = new post(body)

  try {
    await connection()
    await newpost.save()
    return new NextResponse('You have created a post', {status: 201})
    
  } catch (error) {
    return new NextResponse('Failed to interact with database', {status: 500})
  }
}