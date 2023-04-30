const { readFile, writeFile } = require("fs");
const fileFirest = () => {
  console.log("Just entering the  promise");
  let promise = new Promise(function (resolve, reject) {
    readFile("./content/first.txt", "utf-8", (error, result) => {
      if (error) {
        reject("Promise is rejected");
      } else {
        console.log("inside promise");
        resolve(result);
      }
    });
  });
  console.log("before leaving the promise");
  return promise;
};
async function demoPromise() {
  console.log("Starting....");
  try {
    const firestdata = await fileFirest();
    console.log(firestdata);
  } catch (error) {
    console.log("This is error message");
  }
  console.log("Leaving the asynch function");
}
demoPromise();
