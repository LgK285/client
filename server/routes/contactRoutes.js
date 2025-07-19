const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET all contacts
router.get("/", async (req, res) => {
  const { search, group, sort } = req.query;
  let filter = {};
  if (search) filter.name = new RegExp(search, "i");
  if (group) filter.group = group;

  let contacts = await Contact.find(filter);
  if (sort === "asc") contacts.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "desc") contacts.sort((a, b) => b.name.localeCompare(a.name));
  res.json(contacts);
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET one
router.get("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(contact);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
