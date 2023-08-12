const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email Already Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
});

module.exports = mongoose.model.Student || mongoose.model("Student", studentSchema);