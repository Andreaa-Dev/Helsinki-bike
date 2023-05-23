import { MongoMemoryServer } from "mongodb-memory-server";

const setup = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGO_URI = uri;
  (global as any).__MONGOINSTANCE = mongod;
};

export default setup;
