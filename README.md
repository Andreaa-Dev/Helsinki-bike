# Helsinki bike

live version for backend: `https://solita-dev.onrender.com/` and frontend: `https://helsinki-bike.onrender.com/`

## Running locally

### Using Docker

This requires you to have docker installed. Docker compose is used to run both the backend and mongodb database together.

From within `api` folder in your terminal:

1. Build the docker image: `docker-compose build`
2. Run the backend docker image and database: `docker-compose up`
3. Optionally, you can import data into your local mongodb. First validate the data: `yarn run validate-journeys`. This will produce a new csv file `journeys-validated.csv` which is ready for import: `yarn run import-journeys mongodb://localhost:27017 ./data/journeys-validated.csv`
4. You can import stations as well with: `yarn run import-stations mongodb://localhost:27017 ./data/stations.csv`

Once everything is up and running, try getting journeys: `curl http://localhost:8000/journeys\?page=1\&limit=10`
For getting stations: `curl http://localhost:8000/stations\?page=1\&limit=10`

## Tech stack

- TypeScript
- MUI
- Redux Toolkit
