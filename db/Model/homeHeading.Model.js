const mongoose = require("mongoose")

const HomeHeadingSchema = new mongoose.Schema({
    marqueeRow: { type: Object, required: true },
    headingBox: { type: Object, required: true }
}, { timestamps: true })
const HomeHeading = mongoose.models.HomeHeading
  ? mongoose.models.HomeHeading // If already defined, use the existing model
  : mongoose.model('HomeHeading', HomeHeadingSchema); // Otherwise, create a new model

module.exports = HomeHeading;