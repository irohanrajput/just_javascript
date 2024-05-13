// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", typeof dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });


var i = 1

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = i;
      i = i+1
      resolve(`resolved; and the data is: ${data}`)
      return getData;
    }, 2000);
  });
}

getData(4)
  .then((response) => {
    console.log("Response:", response);
    return getData()
  })
//promise chaining

