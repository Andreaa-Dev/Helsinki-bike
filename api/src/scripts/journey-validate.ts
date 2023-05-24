import fs from "fs";
import { parse } from "csv-parse";

const headers = [
  "Departure",
  "Return",
  "Departure station id",
  "Departure station name",
  "Return station id",
  "Return station name",
  "Covered distance (m)",
  "Duration (sec.)",
];

const durationIndex = headers.indexOf("Duration (sec.)");
const distanceIndex = headers.indexOf("Covered distance (m)");

function validateRow(row: string[]): boolean {
  if (Number(row[durationIndex]) < 10) {
    return false;
  }

  if (Number(row[distanceIndex]) < 10) {
    return false;
  }

  return true;
}

const inputFilePath = "./data/journeys.csv";
const outputFilePath = "./data/journeys-validated.csv";

const readStream = fs.createReadStream(inputFilePath, "utf8");
const writeStream = fs.createWriteStream(outputFilePath, "utf8");

const parser = parse({
  delimiter: ",",
  bom: true,
  fromLine: 2,
});

readStream.pipe(parser);

parser.on("data", async (row) => {
  if (validateRow(row)) {
    const csvRow =
      row
        .map((value: string) => {
          if (value.includes(",") || value.includes('"')) {
            value = value.replace(/"/g, '""');
            value = `"${value}"`;
          }
          return value;
        })
        .join(",") + "\n";
    writeStream.write(csvRow, "utf8");
  }
});
