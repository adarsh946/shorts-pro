import mongoose, { Mongoose } from "mongoose";

const MONGO_DB = process.env.MONGO_URI;

if (!MONGO_DB) {
  throw new Error("please provide database connection uri");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  //as you know nextjs works on Edges so check for any promise for connection

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPool: 10,
    };

    // bufferCommands: false disables Mongoose's internal buffering of commands. This means if the connection is not yet established, Mongoose will not queue queries and will throw an error instead.

    cached.promise = mongoose.connect(MONGO_DB, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw new Error("Connection is lost");
  }
  return cached.conn;
};

export default connectDb;
