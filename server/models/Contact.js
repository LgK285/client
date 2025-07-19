const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    match: [/.+@.+\..+/, 'Email must be valid']
  },
  phone: String,
  group: { type: String, enum: ['Friends', 'Work', 'Family', ''] },
});

module.exports = mongoose.model("Contact", contactSchema);
