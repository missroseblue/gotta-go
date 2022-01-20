const mongoose = require("mongoose");

const { Schema } = mongoose;

const restroomSchema = new Schema({
  restroomId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
  },
  accessible: {
    type: Boolean,
    required: true,
  },
  unisex: {
    type: Boolean,
    required: true,
  },
  changingTable: {
    type: Boolean,
    required: true,
  },
  lat: {
    type: Float32Array,
    required: true,
  },
  long: {
    type: Float32Array,
    required: true,
  },
});

const Restroom = mongoose.model("Restroom", restroomSchema);

module.exports = Restroom;
