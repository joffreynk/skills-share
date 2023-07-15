import mongoose from "mongoose";

const { Schema } = mongoose

const postSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    userName: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
}, {timestamps: true})


export default mongoose.model("Post", postSchema)