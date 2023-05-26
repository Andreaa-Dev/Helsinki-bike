import { MongoMemoryServer } from "mongodb-memory-server";
import { RedisMemoryServer } from "redis-memory-server";

const setup = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGO_URI = uri;
  (global as any).__MONGOINSTANCE = mongod;
};

const redisServer = new RedisMemoryServer();
(global as any).__REDISINSTANCE = redisServer;
const host = await redisServer.getHost();
const port = await redisServer.getPort();
const redisUri = `redis://${host}:${port}`;
process.env.REDIS_URI = redisUri;
export default setup;
