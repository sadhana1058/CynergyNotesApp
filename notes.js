require("dotenv").config();
const express = require("express");
const notes = express();
const mongoose = require("mongoose");
var cors = require("cors");

notes.use(express.json());
notes.use(cors());

//import routes
const postsRoute = require("./RouteS/posts");

notes.use("/posts", postsRoute);

//connect to mongoDB
const db_url = `mongodb+srv://${process.env.dbusername}:${process.env.dbpassword}@cluster0.4ijsz.gcp.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongoDB ..");
  }
);

if (process.env.NODE_ENV === "production") {
  // console.log("heloooooo");
  notes.use(express.static(__dirname )); //change folder name from frontend to whatever you have there
  notes.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    //change folder name from frontend to whatever you have there
  });
}
//Listen Server
const PORT = process.env.PORT || 3000;
notes.listen(PORT, () => {
  console.log("Server running at port", PORT);
});