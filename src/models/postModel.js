import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
}, {timestamps: true})

const postModel = mongoose.models.Post || mongoose.model("Post", postSchema)

export default postModel