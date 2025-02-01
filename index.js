const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("Let explor mongoDB with ph level 2 web course ");
});
app.listen(port);
