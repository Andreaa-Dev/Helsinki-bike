import { MongoMemoryServer } from "mongodb-memory-server";

const teardown = async () => {
  const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;
  await instance.stop();
};

export default teardown;
