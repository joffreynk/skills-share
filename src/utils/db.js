import mongoose from 'mongoose';

const connection = async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/skills-share');
  } catch (error) {
    handleError(error);
  }
};

export default connection