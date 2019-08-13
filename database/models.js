const mongoose = require('mongoose');
const db = require('./index');

const locationSchema = new mongoose.Schema({
  location: String,
  stations: String,
  lastUpdate: Date,
  lat: Number,
  long: Number,
  map: Object,
  shops: Object,
  guides: Object,
  routes: Object,
  avalanche: Object,
  data: Array,
});

const Location = mongoose.model('Location', locationSchema);

const dataSchema = new mongoose.Schema({
  location: String,
  date: Date,
  TMAX: Number,
  TMIN: Number,
  PRCP: Number,
  SNOW: Number,
  SNWD: Number,
  AWND: Number,
  AWDR: Number,
  WSFI: Number,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = { Location, Data };
