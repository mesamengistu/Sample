// const os = require("os");
// // info about current user
// const user = os.userInfo();
// console.log(user);
// // methods returns the system up time in seconds
// console.log(`The System Uptime is ${os.uptime()}`);
// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);

// PATH
const path = require("path");
console.log(`My platform specific separator is ${path.sep}`);
// Path.join()
//While join simply concatenates every parameter from left to right whether they have / or not
const filePath = path.join("/content/", "subfolder", "test.js");
console.log("File path:-", filePath);
console.log(path.basename(filePath));
// Path.resolve()
//concatenate the right most parameters with / directly with the root path to make an absolute path (check the examples)
//and then concatenates anything without / as a directory
const absolutePath = path.resolve(__dirname, 
  "content",
  "subfolder",
  "test.js",
);
console.log(`absolute path is ${absolutePath}`);

//FS
