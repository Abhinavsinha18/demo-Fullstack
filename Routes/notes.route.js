const express = require("express");
const { Notemodel } = require("../Models/Note.model");

const noteroute = express.Router();

noteroute.get("/", async (req, res) => {
  let data = await Notemodel.find();

  res.send(data);
});

noteroute.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newNote = new Notemodel(payload);
    await newNote.save();
    res.send("created note");
  } catch (error) {
    console.log(error);
  }
});


noteroute.patch("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await Notemodel.findByIdAndUpdate({ _id: id }, payload);
    res.send("update");
  } catch (error) {
    console.log(error);
  }
});

noteroute.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Notemodel.findByIdAndDelete({ _id: id });
    res.send("delete notes");
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  noteroute,
};
