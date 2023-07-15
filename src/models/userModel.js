import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
      type: string,
      required: true
    },
    email: {
      type: string,
      unique: true,
      required: true
    },
    password: {
      type: string,
      required: true
    },
}, {timestamps: true})


export default model("User", userSchema)