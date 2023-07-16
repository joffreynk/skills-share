import postModel from "@/models/postModel";
import   connection  from "@/utils/db.js";
import { NextResponse } from "next/server";


const GET = async ({params}) => {
  try {
    await connection();

    const post = await postModel.findById({_id: params.id})

    return new NextResponse(JSON.stringify(post), {status: 200});

  } catch (error) {
    return new NextResponse("Failed to connect to database", {status: 500});
  }
};
