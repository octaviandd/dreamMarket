/** @format */

const express = require("express");

//INITIALIZE ROUTER
const router = express.Router();

//RETRIEVE THE ITEM MODEL
const newSymbol = require("../../models/SymbolModel");

// @route GET localhost:5000/api/items
// @desc Get ALL ITEMS
// @acces PUBLIC

router.get("/", async (req, res) => {
  try {
    const items = await newSymbol.find();
    if (!items) throw Error("No Items");

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", (req, res) => {
  const newItem = new newSymbol({
    title: req.body.title,
    desc: req.body.desc,
    author: req.body.author
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;
