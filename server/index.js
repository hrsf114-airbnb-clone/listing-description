const express = require('express');
const morgan = require('morgan');
const path = require('path');
const models = require('../database/models');

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use('/rooms/:id/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/listing', function (req, res) {
  models.Room.find({}, (err, rooms) => { res.status(200).send(rooms) })
});

app.get("/api/listing/:id", function (req, res) {
  models.Room.findOne({ roomNum: req.params.id }, (err, room) => { res.status(200).send(room) })
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;