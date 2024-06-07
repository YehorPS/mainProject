const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonnelSchema = new Schema({
  ID: { type: String, required: true, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  MiddleName: { type: String, required: true },
  Rank: { type: String, required: true },
  BirthYear: { type: Number, required: true }
});

const Personnel = mongoose.model('Personnel', PersonnelSchema);

module.exports = Personnel;
