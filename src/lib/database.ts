const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "water_wars",
});

export default function connect() {
  connection.connect();
}

connection.query("", function (error: Error, results: any, fields: any) {
  if (error) throw error;
  console.log(results);
});

connection.end();
