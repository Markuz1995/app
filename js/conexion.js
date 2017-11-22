var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "recordatorio"
});

connection.connect((err) => {
  if (err) {
    return console.log(err,stack);
  }

  console.log("se conecto esta joda");
});
