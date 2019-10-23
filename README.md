# airsenal-frontend
Angular app to interact with the airsenal API

To install and run the frontend, clone the repo, then do 
```
npm install
```
then it should run with 
```
npm start
```
and the web interface should be available on `localhost:4200`

## The AIrsenal API

You need to have a working installation of [AIrsenal](https://github.com/alan-turing-institute/AIrsenal) (follow the instructions there) and have the AIrsenal database up-to-date with the latest results and fixtures - either a local sqlite file, or a postgres server.

In `AIrsenal/airsenal/api/` run the command
```
python app.py
```
to start the API - it should then be accepting requests on `localhost:5002` and ready to talk to the frontend!
