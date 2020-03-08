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

``` bash
npm install
```
Set enviornment variables or create .env file with following:
``` bash
MONGODB=mongodb://localhost/coronavirusa
PORT=3000
HOST=localhost
CRON=0 0 * * * *
```
Start in development mode
``` bash
npm run dev
```
Start project
``` bash
npm run start
```

### Usage
Get all information
``` bash
$ curl http://localhost:3000/ | jq
```
Response should look like this:
``` json
{
  "totals": {
    "cases": 107516,
    "deaths": 3658,
    "recovered": 60920,
    "activeCases": 42938,
    "closedCases": 64578
  },
  "countries": [
    {
      "country": "China",
      "totalCases": 80701,
      "newCases": 50,
      "totalDeaths": 3098,
      "newDeaths": 28,
      "totalRecovered": 57331,
      "activeCases": 20272,
      "criticalCases": 20272,
      "srcUpdate": "2020-03-08T12:59:00.000Z",
      "dbUpdated": "2020-03-08T13:00:16.469Z"
    },
    {
      ...
    }

```
## Built With
* Express JS
* Mongoose
* Axios
* Cheerio

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
