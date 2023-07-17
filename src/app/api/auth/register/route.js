import connection from "@/utils/db";
import {bcrypt} from 'bcryptjs'
export const POST = async(request, {params})=> {
  
  try {
    const {name, email, password} = await request.json();
    await connection();

    const hashedPassword = await bcrypt.has
  } catch (error) {
    
  }
}