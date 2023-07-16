import {NextResponse} from 'next/server'

import userModel from "@/models/userModel.js"
import connection from "@/utils/db.js"

export const GET = async(request)=>{
  try {
    await connection()

    const users = await userModel.find()

    return new NextResponse(JSON.stringify(users), {status: 200})
    
  } catch (error) {
    return new NextResponse('Failed to interact with database', {status: 500})
  }
}