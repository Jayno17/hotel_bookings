use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Paul Smith",
    email: "paulsmith@hotmail.com",
    checked_in: false
  },
  {
    name: "Joe Brown",
    email: "jb200h@hotmail.com",
    checked_in: true
  },
  {
    name: "Pat Green",
    email: "ppgreen@gmail.com",
    checked_in: false
  },
  {
    name: "Angela Arnott",
    email: "aarnott@outlook.co.uk",
    checked_in: false  }
]);
