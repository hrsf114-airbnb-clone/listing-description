const mongoose = require('mongoose');
const faker = require('faker')

mongoose.connect('mongodb://localhost/airbnb', {useNewUrlParser: true});

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

let roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  locality: String,
  guests: Number,
  beds: Number,
  bedrooms: Number,
  baths: Number,
  checkinRating: Number,
  locationRating: Number,
  Amenities: Array,
  sleepingArrangement: Object,
  Accessibility: Array,
  hostObj: Object
});


var Room = mongoose.model('Room', roomSchema);

let getSleepingArrangement = (beds, bedrooms) => {
  let result = {}
    result[`bedroom 1`] = Math.floor(beds/bedrooms) + (beds % bedrooms)
  if (bedrooms > 1) {
    for (i = 2; i <= bedrooms; i++) {
    result[`bedroom${i}`] = Math.floor(beds/bedrooms)
    }
  }
  return result;
}


for(i = 0; i < 101; i++) {
  let amenities = {
    basic: {
      wifi: faker.random.boolean(),
      dryer: faker.random.boolean(),
      laptop: faker.random.boolean(),
      cable: faker.random.boolean(),
      iron: faker.random.boolean(),
      washer: faker.random.boolean(),
      tv: faker.random.boolean()
    },
    facilities: {
      elevator: faker.random.boolean(),
      parking: faker.random.boolean()
    },
    dining: {
      kitchen: faker.random.boolean(),
      coffee: faker.random.boolean(),
      fridge: faker.random.boolean(),
      microwave: faker.random.boolean(),
      oven: faker.random.boolean(),
      stove: faker.random.boolean()
    },
    bed: {
      dryer: faker.random.boolean(),
      hanger: faker.random.boolean(),
      shampoo: faker.random.boolean(),
      linen: faker.random.boolean()
    }
  }
  let roomObj = {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    locality: faker.address.county(),
    guests: faker.random.number({
              'min': 1,
              'max': 10
            }),
    bedrooms: faker.random.number({
                'min': 1,
                'max': 5
              }),
    beds: faker.random.number({
            'min': this.bedroom,
            'max': 10
          }),
    baths:  faker.random.number({
              'min': 1,
              'max': this.bedrooms
            }),
    checkinRating: faker.random.number({
                      'min': 1,
                      'max': 100
                    }),
    locationRating: faker.random.number({
                      'min': 1,
                      'max': 100
                    }),
    Amenities: amenities,
    sleepingArrangement: getSleepingArrangement(this.beds, this.bedrooms),
    Accessibility: ['Wide doorway to the home’s entrance', 'Well-lit path to entrance'],
    hostObj: {
      city: faker.address.city(),
      country: faker.address.country(),
      joinDate: faker.date.month() + ' ' + faker.random.number({
                'min': 2012,
                'max': 2018
              }),
      reviewsNumber: faker.random.number({
                      'min': 1,
                      'max': 1200
                    }),
      referenceNumber: faker.random.number({
                      'min': 0,
                      'max': 10
                    }),
      verified: faker.random.boolean(),
      superhost: faker.random.boolean(),
      languages: 'english',
      name: faker.name.firstName() + " "+faker.name.lastName()
    }
  }

  let roomDocs = new Room(roomObj)
  roomDocs.save((err, room) => {
    if (err) return console.log(err);
    console.log(`saved ${i} document`)
  });
}
module.exports = Room

