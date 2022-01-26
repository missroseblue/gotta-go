require('dotenv').config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require('./utils/auth');
const db = require("./config/connection");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const startServer = async () => {
  await server.start();

  server.applyMiddleware({ app });
};

// initialize Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get('/api/search', async (req, res) => {
  try {
    const zip = `${req.query.zip}`;

    // use node-fetch to call the open weather api, and reads the key from .env
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.OPENWEATHER_API_KEY}`,
    );

    const { coord } = await response.json();
    console.log(coord);

    return res.json({
      success: true,
      coord,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server now running on port ${PORT}.`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
