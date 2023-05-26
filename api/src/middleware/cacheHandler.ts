import { Request, Response, NextFunction } from "express";
import { redisClient } from "../app";

export const cacheHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { originalUrl } = req;
  const cache = await redisClient.get(originalUrl);
  if (cache) {
    res.status(200).send(JSON.parse(cache));
    return;
  }

  (res as any).sendJson = res.json;
  // @ts-ignore
  res.json = async (body) => {
    // cache for 1 hour
    await redisClient.set(originalUrl, JSON.stringify(body), {
      EX: 60,
      NX: true,
    });
    // @ts-ignore
    res.sendJson(body);
  };
  next();
};
