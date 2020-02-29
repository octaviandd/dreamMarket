/** @format */

const express = require("express");

const router = express.Router();

const Comment = require("../../models/CommentsModel");

router.get("/", async (req, res) => {
  try {
    const items = await Comment.find();
    if (!items) throw Error("No Items");

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", (req, res) => {
  const newItem = new Comment({
    name: req.body.name,
    desc: req.body.desc
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;
