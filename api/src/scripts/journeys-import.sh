#!/bin/bash

uri=$1
fileName=$2

mongoimport --db=test --collection=journeys --type=csv \
   --columnsHaveTypes \
   --numInsertionWorkers=10 \
   --fields="departure.string(),return.string(),departureStationId.int32(),departureStationName.string(),returnStationId.int32(),returnStationName.string(),coveredDistance.decimal(),duration.int32()" \
   --file="$fileName" \
   --uri="$uri"