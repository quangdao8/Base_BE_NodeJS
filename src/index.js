const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const cors = require("cors");
const routes = require("./routes/index");
const { MongoClient } = require("mongodb");
const app = require("./app.js");
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
// app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

mongoose
    .connect("mongodb+srv://daopq:daopq@cluster0.yz3ijtq.mongodb.net/demo_mess?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => {
        // var collection = db.collection("users");
        console.log("connect success");
    })
    .catch((err) => console.log("err---", err));

app.listen("3000", () => {
    console.log("listening on 3000");
});
