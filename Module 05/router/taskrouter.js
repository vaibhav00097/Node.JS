const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()
const Task = require("../model/Task")

router.post("/task", async (req, resp) => {
    try {
        const task = new Task(req.body)
        const data = await task.save()
        resp.send(data)
    } catch (error) {
        resp.send(error);
    }
});

router.get("/task", async (req, resp) => {
    try {
        const data = await Task.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});

router.delete("/task/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Task.findBYIdAndDelete(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});
router.put("/task/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Task.findBYIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});

router.patch("/task/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await Task.findBYIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
});

module.exports = router