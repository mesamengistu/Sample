//CommonJS every file is module (by default)
//Modules -Encapsulated Code (only share minimum)
const { jhon, smith, mesay } = require("./2-name");
const sayHi = require("./4-util");
const data = require("./5-modulealtsyntax");
const sum = require("./6-invoke-module");

console.log(data);
sayHi(jhon);
sayHi(mesay);
sum(1, 2);
