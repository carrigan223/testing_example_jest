//import express from 'express';
const express = require("express");
const { getAllUsers } = require("./users/users_helpers");

//start the express app
const app = express();

//first route
app.get("/", (req, res) => {
  const users = getAllUsers();
  res.send(users);
});

//initialize the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
