const mongoose = require("mongoose")
const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const DBurl = process.env.DBurl

mongoose.connect(DBurl).then(() => {
    console.log("DB connected..!!");
}).catch((err) => {
    console.log(err);
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

const viewPath = path.join(__dirname, "../tempaletes/views")
app.set("view engine", "hbs")
app.set("views",viewPath)

const userrouter = require("../router/userrouter")
app.use("/", userrouter)

app.listen(PORT, () => {
    console.log(`server runing on port :${PORT}`);
})