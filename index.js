"use strict";

/*
Authors:
Linda Rodriguez -
*/
const express = require("express");
const server = express();
var cors = require("cors");
const port = 3000;
server.use(cors());
server.use(express.static("public"));
const bodyParser = require("body-parser");

server.use(bodyParser.json());

let users = [
  { name: "Linda" },
  { name: "Cristhian" },
  { name: "Oscar" },
  { name: "Ana" },
  { name: "Juan" },
  { name: "Alex" },
  { name: "Jhon" },
  { name: "Maria" },
  { name: "Danna" },
  { name: "Alejandra" },
];

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/users", (req, res) => {
  res.send(users);
});

server.post("/users", (req, res) => {
  let bodyR = req.body;
  let name = bodyR.name;
  let user = { name };
  users.push(user);
  console.log("create");
  res.send(users);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
