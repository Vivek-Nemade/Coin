const mongoose = require("mongoose");

const connectDB = async () => {
  try {
     mongoose.connect("mongodb+srv://VivekN:Romeo123@cluster0.54ofmuz.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

module.exports = connectDB;