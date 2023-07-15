import mongoose from 'mongoose';

const connection = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error('Database connection error: '+ error.message)
  }
};

export default connection