const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Personnel = require('./models/Personnel');
const Unit = require('./models/Unit');
const Position = require('./models/Position');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/military_personnel_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.get('/personnel', async (req, res) => {
  const personnel = await Personnel.find();
  res.json(personnel);
});

app.post('/personnel', async (req, res) => {
  const newPersonnel = new Personnel(req.body);
  await newPersonnel.save();
  res.json(newPersonnel);
});

app.put('/personnel/:id', async (req, res) => {
  const updatedPersonnel = await Personnel.findOneAndUpdate({ ID: req.params.id }, req.body, { new: true });
  res.json(updatedPersonnel);
});

app.delete('/personnel/:id', async (req, res) => {
  await Personnel.findOneAndDelete({ ID: req.params.id });
  res.json({ message: 'Personnel deleted' });
});

app.get('/units', async (req, res) => {
  const units = await Unit.find();
  res.json(units);
});

app.post('/units', async (req, res) => {
  const newUnit = new Unit(req.body);
  await newUnit.save();
  res.json(newUnit);
});

app.put('/units/:id', async (req, res) => {
  const updatedUnit = await Unit.findOneAndUpdate({ ID: req.params.id }, req.body, { new: true });
  res.json(updatedUnit);
});

app.delete('/units/:id', async (req, res) => {
  await Unit.findOneAndDelete({ ID: req.params.id });
  res.json({ message: 'Unit deleted' });
});

app.get('/positions', async (req, res) => {
  const positions = await Position.find();
  res.json(positions);
});

app.post('/positions', async (req, res) => {
  const newPosition = new Position(req.body);
  await newPosition.save();
  res.json(newPosition);
});

app.put('/positions/:id', async (req, res) => {
  const updatedPosition = await Position.findOneAndUpdate({ ID: req.params.id }, req.body, { new: true });
  res.json(updatedPosition);
});

app.delete('/positions/:id', async (req, res) => {
  await Position.findOneAndDelete({ ID: req.params.id });
  res.json({ message: 'Position deleted' });
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
