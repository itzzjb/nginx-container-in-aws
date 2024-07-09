const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "This page is severed from nginx container that runs on a AWS EC2 instance."
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
