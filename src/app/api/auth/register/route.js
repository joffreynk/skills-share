import User from "@/models/userModel";
import connection from "@/utils/db";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";
export const POST = async(request, {params})=> {
  
  try {
    const {name, email, password} = await request.json();
    await connection();

    const hashedPassword = await bcrypt.hashSync(password, 5);
    const user = new User({name, email, password: hashedPassword});
    await user.save()

    return new NextResponse('User is successfully created', {status : 201})

  } catch (error) {
    return new NextResponse(error.message, {status : 500})
  }
}