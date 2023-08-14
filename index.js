const express = require("express");
require("dotenv").config();
const dbUtils = require("./utils/dbUtils");
const app = express();
app.use(express.json());
const userRoute = require("./Routes/userRoute");
const PORT = process.env.PORT;

dbUtils.initDB();

app.get("/nishant", (req, res) => {
  console.log("welcome to the first page");
  res.send("i am the first");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
