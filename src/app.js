const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const morgan = require("morgan");
const winston = require("./config/winston");
require("dotenv").config();

const app = express();

// logger middleware
app.use(morgan("combined", { stream: winston.stream }));

// Construct a schema, using GraphQL schema language
const typeDefs = require("./graphql/schema");
// Provide resolver functions for your schema fields
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/api" });

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true }, () => {
    winston.info(`Connected to database ${process.env.MONGO_DB}!`);
  })
  .then(async () => {
    app.listen(process.env.PORT, () =>
      winston.info(`Listening on port ${process.env.PORT}!`)
    );
  });
