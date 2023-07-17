import { NextResponse } from "next/server";

import postModel from "@/models/postModel";
import   connection  from "@/utils/db.js";

export const GET = async (request, {params}) => {
  try {
    await connection();
    const post = await postModel.findById(params.id)

    return new NextResponse(JSON.stringify(post), {status: 200});

  } catch (error) {
    return new NextResponse("Failed to connect to database", {status: 500});
  }
};


export const DELETE = async (request, {params}) => {
  try {
    await connection();
    const post = await postModel.findByIdAndDelete(params.id)

    return new NextResponse('Post is deleted successfully', {status: 203});

  } catch (error) {
    return new NextResponse("Failed to connect to database", {status: 500});
  }
};