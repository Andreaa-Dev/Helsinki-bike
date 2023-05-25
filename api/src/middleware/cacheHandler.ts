import { Request, Response, NextFunction } from "express";

import { client as redisClient } from "../server";

export const cacheHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { url } = req;
  const cache = await redisClient.get(url);
  if (cache) {
    res.status(200).send(JSON.parse(cache));
    return;
  }

  (res as any).sendResponse = res.json;
  // @ts-ignore
  res.json = async (body) => {
    // cache for 1 hour
    await redisClient.set(url, JSON.stringify(body), { EX: 3600, NX: true });
    // @ts-ignore
    res.sendResponse(body);
  };
  next();
};
