import dotenv from 'dotenv';
dotenv.config();
import {MongoClient, ServerApiVersion} from 'mongodb';
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@librarycluster.qkne8.mongodb.net/?retryWrites=true&w=majority&appName=LibraryCluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

export const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db("HalcyonX");
    console.log("Connected to MongoDB database.");
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
};

export const getDb = () => {
  if(!db)
    throw new Error("Database not initialized. Call connectToDatabase first.");
  return db;
};