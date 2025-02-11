import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // Ensure TypeScript knows it's a string

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
