const express = require('express');
const bodyParser = require('body-parser');

const Room = require('../db/fakerData.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'))


app.get('/api/listing', function (req, res) {
  Room.find({}, (err, rooms) => { res.status(200).send(rooms) })
});

app.get("/api/listing/:id", function(req, res) {  
  Room.findById(req.params.id, (err, room) => {res.status(200).send(room)})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
