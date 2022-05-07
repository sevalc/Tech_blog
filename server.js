const express = require("express");
const sequelize = require("./config/connection");
const allRoutes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
const { User, Blog } = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

pp.use("/", allRoutes);

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

