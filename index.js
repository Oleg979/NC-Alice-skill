const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { SERVER_HANDLE_URL } = require("./config/constants");

axios.interceptors.request.use(config => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(SERVER_HANDLE_URL, config.url);
  }
  return config;
});

const app = express();
app.use(cors());

const aliceController = require("./controllers/aliceController");
app.use("/alice", aliceController);

app.get("/", (req, res) => res.send("Working..."));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Express server listening on port " + port));
