import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ammanana204",
  database: "book",
});

app.get("/", (req, res) => {
  res.json("Response from backend Team");
});

app.listen(8000, () => {
  console.log("Connected to backend1");
});
