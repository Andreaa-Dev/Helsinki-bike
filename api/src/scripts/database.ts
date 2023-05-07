import * as fs from "node:fs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { parse } from "csv-parse/sync";

import Journey from "../models/Journey";

dotenv.config();
console.log(process.env.MONGODB_URI, "env");
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(injectJourney)
  .catch((error: Error) => {
    console.log("MongoDB connection error." + error);
    process.exit(1);
  });

type JourneyRaw = {
  Departure: string;
  Return: string;
  "Departure station id": string;
  "Departure station name": string;
  "Return station id": string;
  "Return station name": string;
  "Covered distance (m)": string;
  "Duration (sec.)": string;
};

async function injectJourney() {
  const content = fs.readFileSync("./data/journeys.csv", "utf8");

  const journeys: JourneyRaw[] = parse(content, {
    columns: true,
    skip_empty_lines: true,
  });

  await Promise.all(
    journeys.slice(0, 1).map(async (item) => {
      if (
        Number(item["Duration (sec.)"]) > 10 &&
        Number(item["Covered distance (m)"]) > 10
      ) {
        console.log(item.Departure);
        const journey = new Journey({
          departure: new Date(item["Departure"]),
          return: new Date(item.Return),
          departureStationId: Number(item["Departure station id"]),
          departureStationName: item["Departure station name"],
          returnStationId: Number(item["Return station id"]),
          returnStationName: item["Return station name"],
          coveredDistance: Number(item["Covered distance (m)"]),
          duration: Number(item["Duration (sec.)"]),
        });
        console.log(journey);

        try {
          await journey.save();
        } catch (error) {
          console.log(error, "error");
        }
      }
    })
  );

  mongoose.disconnect();
  process.exit(0);
}
