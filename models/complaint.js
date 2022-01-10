const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

const complaint = mongoose.model('complaint', complaintSchema);
module.exports = complaint;