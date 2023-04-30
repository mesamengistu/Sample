// npm -global command come with node
// npm --version
// local dependency -use it in this particular project
//npm i <packageName>

// global dependency -use it in any project
// npm install -g <packageName>
//sudo npm install -g <packageName> (mack)

// package.json -manifest file (store important info about project/package)
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step ,press enter to skip)
// npm init -y (install everything default)

const _ = require("lodash");
const item = [1, [2, [3, [4,[5,6]]]]];
console.log(_.flattenDeep(item));
