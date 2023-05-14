#!/bin/bash

mongo_uri=$1

tail -n +2 "../data/journeys.csv" > "../data/temp.csv"

mongoimport --db=test --collection=journeys --type=csv \
   --columnsHaveTypes \
   --numInsertionWorkers=10 \
   --fields="departure.string(),return.string(),departureStationId.int32(),departureStationName.string(),returnStationId.int32(),returnStationName.string(),coveredDistance.decimal(),duration.int32()" \
   --file="../data/temp.csv" \
   --uri="$mongo_uri"

rm "../data/temp.csv"