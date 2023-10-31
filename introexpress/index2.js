// imports from external packages
require('dotenv').config();
const express = require("express");
const app = express();
// const port = 3000; no longer needed because of 'dotenv'

// imports from internal packages
const { logger } = require("./logger");

// middleware
app.use(express.json());
app.use(logger);

// endpoints
app.get("/", function (request, respond) {
  respond.send("Hello World!");
});

app.get("/fruits", (request, respond) => {
  respond.status(200).send(fruitData);
});

app.get("/fruits/:name", (request, respond) => {
  const name = request.params.name.toLocaleLowerCase();
  // console.log(name);

  const fruit = fruitData.filter(
    (fruit) => fruit.name.toLocaleLowerCase() === name
  );

  if (fruit === undefined) {
    respond.status(404).send("Fruit not found");
  } else {
    respond.send(fruit);
  }
});
app.post("/fruits", (request, respond) => {
  try {
    // first check if a fruit with the name specified by the user already exists
    const fruit = fruitData.find(
      (fruit) => fruit.name.toLowerCase() === request.body.name.toLowerCase()
    );

    if (fruit !== undefined) {
      // fruit already exists -> conflict respond code returned
      respond.status(409).send("The fruit already exists.");
    } else {
      // fruit does not already exist. Increment the maxId and add it to
      // the data sent to the server by the user
      maxId += 1;
      request.body.id = maxId;

      // add the fruit to the list of fruits
      fruitData.push(request.body);

      const updatedFruitData = JSON.stringify(fruitData, null, 2);
      fs.writeFile("./fruits.json", updatedFruitData, "utf-8", (error) => {
        if (error) {
          console.log(error);
        } else {
          // Return successfully created status code and echo the new fruit back to the user
          respond.status(201).json({
            success: true,
            message: request.body,
          });
        }
      });
    }
  } catch (error) {
    respond.json({
      success: false,
      message: error,
    });
  }
});

app.delete("/fruits/:name", (request, respond) => {
  try {
    // First check if fruit exists
    const name = request.params.name.toLowerCase();
    const fruitIndex = fruitData.findIndex(
      (fruit) => fruit.name.toLowerCase() == name
    );

    if (fruitIndex == -1) {
      // Fruit cannot be found, return 404
      respond.status(404).send("The fruit doesn't exist.");
    } else {
      // Fruit found. Use the array index found to remove it from the array
      fruitData.splice(fruitIndex, 1);

      const updatedFruitData = JSON.stringify(fruitData, null, 2);
      fs.writeFile("./fruits.json", updatedFruitData, "utf-8", (error) => {
        if (error) {
          console.log(error);
        } else {
          // Return successfully created status code and echo the new fruit back to the user
          respond.status(204);
        }
      });
    }
  } catch (error) {
    respond.json({
      success: false,
      message: error,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
