/** @format */

const express = require("express");
const config = require("config");

//INITIALIZE ROUTER
const router = express.Router();

//RETRIEVE THE ITEM MODEL
const Dream = require("../../models/DreamModel");

// @route GET localhost:6000/api/items
// @desc Get ALL ITEMS
// @acces PUBLIC

router.get("/", async (req, res) => {
  try {
    const items = await Dream.find();
    if (!items) throw Error("No Items");

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});
