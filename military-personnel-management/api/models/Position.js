const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
  ID: { type: String, required: true, unique: true },
  PositionName: { type: String, required: true },
  PersonnelID: { type: String, required: true },
  UnitID: { type: String, required: true }
});

const Position = mongoose.model('Position', PositionSchema);

module.exports = Position;
