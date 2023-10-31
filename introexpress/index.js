
const express = require("express");
const fs = require("fs");
const app = express();

// const port = 3000; no longer needed because of 'dotenv'

// imports from internal packages
const { logger } = require("./logger");

// middleware
app.use(express.json());
app.use(logger);

// ! DATA IMPORT
let fruitData = undefined;

// FruityAPI ids are not increasing integers. We weed to find the max id, then we can
// simply increment this number to ensure a unique id for new fruit we add
let ids = undefined;
let maxId = undefined;

fs.readFile("./fruits.json", "utf-8", (error, data) => {
  if (error) {
    respond.JSON({
      success: false,
      message: error,
    });
  } else {
    fruitData = JSON.parse(data);
    ids = fruitData.map((fruit) => fruit.id);
    maxId = Math.max(...ids);
  }
});

// ! ROUTES

app.get("/", (request, respond) => {
  respond.send("Hello Fruity");
});

app.get("/fruits", (request, respond) => {
  console.log("hello");
  respond.send(fruitData);
});

app.get("/fruits/:name", (request, respond) => {
  const name = request.params.name.toLowerCase();
  const fruit = fruitData.filter((fruit) => fruit.name.toLowerCase() === name);
  if (fruit === undefined) {
    respond.status(404).send("No fruit found");
  } else {
    respond.send(fruit);
  }
});

