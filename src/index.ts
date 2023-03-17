import mongoose from "mongoose";
import { dbConnect } from "./db/connection";
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
import userRouter from "./routes/user";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);

const start = async () => {
  try {
    await dbConnect();

    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
