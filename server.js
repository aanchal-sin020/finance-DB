const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());


const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log(err));

const recordRoutes = require("./src/routes/recordRoutes");

app.use("/api/records", recordRoutes);

const dashboardRoutes = require("./src/routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);