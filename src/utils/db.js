import mongoose from 'mongoose';

const connection = async()=>{
  try {
    await mongoose.connect('mongodb://172.17.192.1:27017/skills-share');
  } catch (error) {
    throw new Error('Database connection error: '+ error.message)
  }
};

export default connection