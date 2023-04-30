const { readFile, writeFile } = require("fs");

const first = readFile("./content/first.txt", "utf-8", (error, result) => {
  const promise = new Promise(function (resolve, reject) {
    if (error) {
      reject();
    } else {
      resolve();
    }
  });
  promise
    .then(function () {
      const second = readFile(
        "./content/second.txt",
        "utf-8",
        (error, result) => {
          const promise2 = new Promise(function (resolve, reject) {
            if (error) {
              reject();
            } else {
              resolve();
            }
          });
          promise2
            .then(function () {
              console.log("Promise2 is successfuly done ");
              writeFile(
                "./content/mesay.txt",
                "Hello Mesay mengistu KBM",
                (error, result) => {
                  const promise3 = new Promise(function (resolve, rejecte) {
                    if (error) {
                      rejecte();
                    } else {
                      resolve();
                    }
                  });
                  promise3
                    .then(function () {
                      console.log(
                        "promise2 is resolved plus file is writen success"
                      );
                    })
                    .catch(function () {
                      console.log("Rejecte 3");
                    });
                }
              );
            })
            .catch(function () {
              console.log("promise is rejected");
            });
        }
      );
    })
    .catch(function () {
      console.log("Promise 1 is rejected");
    });

  console.log("Action is in progress");
});
console.log("Moving to the next action");
