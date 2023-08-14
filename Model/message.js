const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
  },
  email: {
    type: String,
    trim: true,
    maxlength: 200,
    required: true,
  },
  message: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
  },
});

module.exports = mongoose.model("MessageSchema", messageSchema);
