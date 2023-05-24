#!/bin/bash

uri=$1
fileName=$2

tail -n +2 "$fileName" > "./stations-temp.csv"

mongoimport --db=test --collection=stations --type=csv \
   --columnsHaveTypes \
   --numInsertionWorkers=10 \
   --fields="fid.int32(),id.int32(),nimi.string(),namn.string(),name.string(),osoite.string(),address.string(),kaupunki.string(),stad.string(),operaattor.string(),kapasiteet.int32(),x.decimal(),y.decimal()" \
   --file="./stations-temp.csv" \
   --uri="$uri"

rm "./stations-temp.csv"