# NodeJS REST API SQLite

- This project is Retraced backend home assignment solution
- It implements NodeJS REST API using SQLite as a database (sqlite.db) as well as tests and Winston logger.

## Installation :

1. Clone this repository : `git clone https://github.com/tamirmayb/NodeJS-REST-API-SQLite.git`
2. Then install its dependencies : `npm install`

## Requirements :

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Postman](https://www.getpostman.com/) to test the API or you can just run in your browser (see below).

## Getting started :

1. Install this application (See Installation).
2. Start the server with : `npm start`
   - This should create the db and fill 10 categories automatically (see file createDatabase.js).
   - Wait for log Server listening on port : 3070...
3. Connect Postman to the API at : `http://localhost:3070`
4. Examples for calls:
   - http://localhost:3070/category/ - Should fetch the whole category tree without filtering
   - http://localhost:3070/category/3 - Should fetch the tree from category 3 and on (category 3 is root).
5. The project also contains a few tests which you can run by `npm test` 
6. The project uses sqlite file based database which can be accessed from the file sqlite.db located on the root of the project.

## Author

- Tamir Mayblat ( tamirmayb@gmail.com )

### Thank you!
