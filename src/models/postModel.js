import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
      type: string,
      required: true,
    },
    introduction: {
      type: string,
      required: true
    },
    imgUrl: {
      type: string,
      required: true
    },
    userName: {
        type: string,
        required: true
      },
      content: {
        type: string,
        required: true
      },
}, {timestamps: true})


export default model("Post", postSchema)