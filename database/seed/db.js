const models = require('../models');
const faker = require('faker')

var Room = models.Room;

let getSleepingArrangement = (beds, bedrooms) => {
  let result = {}
  result[`bedroom 1`] = Math.floor(beds / bedrooms) + (beds % bedrooms)
  if (bedrooms > 1) {
    for (i = 2; i <= bedrooms; i++) {
      result[`bedroom${i}`] = Math.floor(beds / bedrooms)
    }
  }
  return result;
}

for (i = 1; i < 101; i++) {
  let amenities = {
    basic: {
      wifi: faker.random.boolean(),
      dryer: faker.random.boolean(),
      'laptop friendly workspace': faker.random.boolean(),
      cable: faker.random.boolean(),
      parking: faker.random.boolean(),
      washer: faker.random.boolean(),
    },
    facilities: {
      iron: faker.random.boolean(),
      elevator: faker.random.boolean()
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
  let bedrooms = faker.random.number({
    'min': 1,
    'max': 5
  });

  let highlights = [
    ['Great check-in experience', '90% of recent guests gave the check-in process a 5-star rating.', 'fa-key'],
    ['Great location', '95% of recent guests gave the location a 5-star rating.', 'fa-map-marker-alt'],
    ['Sparkling clean', '12 recent guests said this place was sparkling clean.', 'fa-broom'],
    ['Self check-in', 'Check yourself in with the keypad.', 'fa-door-open']
  ]

  let roomObj = {
    highlight: highlights[Math.floor(Math.random() * highlights.length)],
    roomNum: i,
    mainDescr: faker.lorem.paragraphs(5),
    title: faker.lorem.sentence(),
    description: ['Entire appartment', 'Entire house'],
    locality: faker.address.city(),
    guests: faker.random.number({
      'min': 1,
      'max': 10
    }),
    bedrooms: bedrooms,
    beds: faker.random.number({
      'min': bedrooms,
      'max': 10
    }),
    baths: faker.random.number({
      'min': 1,
      'max': bedrooms
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
      name: faker.name.firstName() + " " + faker.name.lastName()
    }
  }

  let roomDocs = new Room(roomObj)
  roomDocs.save((err, room) => {
    if (err) return console.log(err);
    console.log(`saved ${i} document`)
  });
}
module.exports = Room
