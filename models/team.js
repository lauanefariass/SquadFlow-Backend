const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cargo: { type: String, required: true },
  team: { type: String, required: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model("Team", TeamSchema);
