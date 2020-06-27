// requirements
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
// comment for heroku
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(require("./routes/views.js"));
app.use(require("./routes/apiB.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});