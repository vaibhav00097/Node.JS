const mongoose = require("mongoose")
const express = require("express")

const shopSchema = new mongoose.Schema({
    pname: {
        type: String
    },
    price: {
        type: Number
    },
    qty: {
        type: Number
    }

})

module.exports = new mongoose.model("Shop",shopSchema)