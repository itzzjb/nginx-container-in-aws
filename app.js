const express = require("express");

const app = express();
const port = "3000";
// For docker we have set the host to 0.0.0.0
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send(
    "This page is severed from nginx container that runs on a AWS EC2 instance."
  );
});

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});
