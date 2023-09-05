import mongoose, { type Connection } from 'mongoose';

let cacheDB: Connection;
mongoose.set('strictQuery', false);

const MONGODB_URI = 'mongodb://127.0.0.1:27017/database';

const getConnection = async (): Promise<Connection> => {
  if (cacheDB?.readyState === 1) {
    console.log('Reusing existing connection...');
    return cacheDB;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      autoIndex: true,
      bufferCommands: false, // Disable mongoose buffering
    });

    cacheDB = mongoose.connection;
    console.log('Connected successfully to MongoDB!');

    return cacheDB;
  } catch (error) {
    console.log('Could not connect to MongoDB...');
    throw error;
  }
};

export { getConnection };
