//this is private
const secrateKey = "12390";
// Shared names
const jhon = "John snow";
const smith = "smith Mesay";
console.log("inside the name methode before exporting jhon and mesay");
module.exports = { jhon, smith, mesay: "mesay wudnesh" };
console.log("inside the name methode after exporting jhon and mesay");
