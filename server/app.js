const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require("cors");

app.use(cors({
    origin: true,
    credentials: true
}));


const connectToDb = require("./src/config/db");
connectToDb();

app.get("/", (req, res) => {   
    res.send("Hello World!");
}); 

const authRouter = require("./src/routes/auth.route")
app.use("/api/auth" , authRouter)
module.exports = app;