const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const Student = require("./db/studentModel");

dbConnect();


const newStudent = new Student({
  email: "student3@example2.com",
  password: "student3"
});

newStudent.save()
  .then(() => {
    console.log("Student inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting student", error);
  });

//delete  a user
// Student.deleteOne(
//     { email: "khan22@example2.com" }
//   )
//     .then(() => {
//       console.log("User Deleted successfully");
//     })
//     .catch((error) => {
//       console.error("Error deleting users", error);
//     });

module.exports = app;