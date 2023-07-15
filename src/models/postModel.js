import mongoose from "mongoose";
const { Schema } = mongoose;

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

const postModel = mongoose.model.Post ? mongoose.model.Post : mongoose.model("Post", postSchema)

export default postModel