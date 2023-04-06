const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const app = express();

//環境変数
require("dotenv").config();
const PORT = process.env.port;
const DATA_BASE_URL = process.env.dataBaseUrl;

//MongoDB接続
mongoose
  .connect(DATA_BASE_URL)
  .then(() => {
    console.log("DB-connect-start");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log(`${PORT}-server-start`);
});
