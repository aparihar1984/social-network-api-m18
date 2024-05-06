// Imports
const connection = require("../config/connection");
const User = require("../models/User");

// Seed data
const users = [
  {
    username: "Test",
    email: "test@testingemail.com",
    thought: [],
  },
];

console.log(connection);

// Creating a connection to mongodb
connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  // Adding seed data to database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});