const mongoose = require('mongoose');
const faker = require('faker')

mongoose.connect('mongodb://database/airbnb', { useNewUrlParser: true });

let roomSchema = new mongoose.Schema({
  title: String,
  roomNum: Number,
  highlight: Array,
  description: Array,
  locality: String,
  guests: Number,
  beds: Number,
  bedrooms: Number,
  baths: Number,
  checkinRating: Number,
  locationRating: Number,
  Amenities: Object,
  sleepingArrangement: Object,
  Accessibility: Array,
  hostObj: Object,
  mainDescr: String
});

var Room = mongoose.model('Room', roomSchema);

module.exports.Room = Room
