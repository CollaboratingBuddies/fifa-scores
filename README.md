# Greenwood Olympia

Score tracking app for some group games

## Running

Run on dev data:

```shell
npm start
```

Run on prod data:

```shell
MONGO_DEV="-prod" npm start
```

## Mongo

Connection url is set by:

```javascript
process.env.MONGO_URL + 'greenwoodOlympia' + process.env.MONGO_DEV
```

process.env.MONGO_URL is set by Mongo, the default is:

```shell
MONGO_URL="mongodb://localhost:27017/"
```

process.env.MONGO_DEV will append a string to the end of the db name. The idea is to set it to "-dev" or "-prod" to keep the environments seperate.

```shell
MONGO_DEV="-dev"
```
OR
```shell
MONGO_DEV="-prod"
```
