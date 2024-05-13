function anyFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 1");
    //   resolve("first resolved");
      reject("first rejected");
    }, 4000);
  });
}

function anyFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 2");
      resolve("second resolver");
    //   reject("second rejected")
    }, 4000);
  });
}

console.log("fetching data ....");

let p1 = anyFunc();
//here p1 is an object that is promise that was returned by anyFunc function.

p1.then((response) => {
  let p2 = anyFunc2();
  p2.then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
  console.log(response);
}).catch((error) => {
  console.log(error);
});
