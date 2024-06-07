const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  ID: { type: String, required: true, unique: true },
  UnitName: { type: String, required: true }
});

const Unit = mongoose.model('Unit', UnitSchema);

module.exports = Unit;
