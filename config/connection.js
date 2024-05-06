// Imports
const { connect, connection } = require("mongoose");

// Creating the database
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// Connecting with Mongoose and MongoDB
connect(connectionString);

// Exports
module.exports = connection;