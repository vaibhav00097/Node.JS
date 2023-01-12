const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Shop = require("../model/Shop")

router.get("/shop", async (req, resp) => {
    try {
        const data = await Shop.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});

router.post("/shop", async (req, resp) => {
    try {
        const task = new Shop(req.body)
        const data = await task.save()
        resp.send(data)
    } catch (error) {
        resp.send(error);
    }
});


router.delete("/shop/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Shop.findBYIdAndDelete(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});


router.put("/shop/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Shop.findBYIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});


router.patch("/shop/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Shop.findBYIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});

module.exports = router