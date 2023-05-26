# Helsinki bike

Live version for backend: `https://solita-dev.onrender.com/` and frontend: `https://helsinki-bike.onrender.com/`

This repo has the code for both frontend and backend. Both were built with typescript. The backend uses express, mongodb and redis for fast data retrieval. Frontend is built with react and redux for maintaining state.

## Tech stack

- TypeScript
- Redis
- React
- MUI
- Redux Toolkit
- Express
- MongoDB
- mapbox-gl (Map)
- Formik and Yup (form validation)

## Running locally

### Running backend using Docker (recommended)

This requires you to have docker installed. Docker compose is used to run the backend ,mongodb database and redis together.

From within `api` folder in your terminal:

1. Build the docker image: `docker-compose build`
2. Run the backend docker image and databases: `docker-compose up`
3. Optionally, you can import data into your local mongodb. Install dependency first: `yarn install`, then validate the data: `yarn run validate-journeys`. This will produce a new csv file `journeys-validated.csv` which is ready for import: `yarn run import-journeys mongodb://localhost:27017 ./data/journeys-validated.csv`
4. You can import stations as well with: `yarn run import-stations mongodb://localhost:27017 ./data/stations.csv`

Once everything is up and running, try getting journeys: `curl http://localhost:8000/journeys\?page=1\&limit=10`
For getting stations: `curl http://localhost:8000/stations\?page=1\&limit=10`

### Running backend without Docker

You should have node 16.x installed. From within `api` folder in your terminal:

1. Install dependencies: `yarn install`
2. Install and start redis database: https://redis.io/docs/getting-started/installation/
3. Install and start mongodb database: https://www.mongodb.com/docs/manual/installation/
4. Create `.env` file in `api` folder, copy contents from `.env.example` and fill in values for your database addresses.
5. Start the server: `yarn start`

### Running frontend

From within `client` folder:

1. Install dependencies: `yarn install`
2. Create a `.env.local` file in `client` and copy contents from `.env.example`, fill in the values for mapbox token and backend address. By default backend will run at port 8000.
3. Run the react app: `yarn start`

## Running test

Ton run integration tests for the api, install dependencies first for the backend, then run `yarn run test`
