const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const app = express();
const PORT = 3000;
app.use(express.json())

const dburl =
  "mongodb+srv://vaibhav0809:vaibhav00@cluster0.5zl84hs.mongodb.net/assignment?retryWrites=true&w=majority";

mongoose.connect(dburl).then(() => {
  console.log("DB connected..");
}).catch((err) => {
    console.log(err);
})


const taskrouter = require("./router/taskrouter");
app.use("/", taskrouter);
const shoprouter = require("./router/shoprouter");
app.use("/", shoprouter);

app.listen(PORT, () => {
  console.log("server running on port :" + PORT);
});
