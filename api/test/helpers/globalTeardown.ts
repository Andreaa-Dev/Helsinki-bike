import { MongoMemoryServer } from "mongodb-memory-server";
import RedisMemoryServer from "redis-memory-server";

const teardown = async () => {
  const mongoInstance: MongoMemoryServer = (global as any).__MONGOINSTANCE;
  const redisInstance: RedisMemoryServer = (global as any).__REDISINSTANCE;
  await mongoInstance.stop();
  await redisInstance.stop();
};

export default teardown;
