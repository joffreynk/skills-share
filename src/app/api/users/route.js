import {NextResponse} from 'next/server'

import users from "@/models/userModel.js"
import connection from "@/utils/db.js"

export const GET = async(request)=>{
  try {
    await connection()

    const users = users.find()

    return new NextResponse(JSON.stringify(users), {status: 200})
    
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    return new NextResponse('Failed to interact with database', {status: 500})
  }
}