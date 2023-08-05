const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(URI, {});
    console.log(
      `MongoDB connected successfully... on ${mongoDB.connection.host}`,
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
