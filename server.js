/** @format */

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

//INITIALIZE
const app = express();

//MIDDLEWARE
app.use(express.json());

//GET CONFIG
const db = config.get("mongoURI");

//ROUTES
const dreams = require("./routes/api/dreamsRoute");
const comments = require("./routes/api/commentsRoute");
const symbols = require("./routes/api/symbolsRoute");

//CONNECT TO MONGODB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MONGODB CONNECTED"))
  .catch(err => console.log(err));

app.use("/api/dreams", dreams);
app.use("/api/comments", comments);
app.use("/api/symbols", symbols);

//SERVER STATIC ASSTES IF IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//CREATE PORT 3000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("PORT IS UP AND RUNNING AT" + port));
