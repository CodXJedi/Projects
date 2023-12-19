const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Route/userRoute");
const chatRoute = require("./Route/chatRoute");
const messageRoute = require("./Route/messageRoute");

const app = express();
require("dotenv").config();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection failed:", err.message));
