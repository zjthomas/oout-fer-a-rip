const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true });

module.exports = db;
