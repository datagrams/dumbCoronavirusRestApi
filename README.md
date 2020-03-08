# Coronavirus API

A dumb rest api for coronavirus status. It gathers info from https://www.worldometers.info/coronavirus/ and stores it in database.

## Getting Started

Project built on Node.js v13.10.1, information stored in mongodb
### Prerequisites

- Node.js
- MongoDB

### Installing

Clone repo

```
git clone url
```

Install dependencies

```
npm install
```
Set enviornment variables or create .env file with following:
```
MONGODB=mongodb://localhost/coronavirusa
PORT=3000
HOST=localhost
CRON=0 0 * * * *
```
Start in development mode
```
npm run dev
```
Start project
```
npm run start
```
### Built With
* Express JS
* Mongoose
* Axios
* Cheerio

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
