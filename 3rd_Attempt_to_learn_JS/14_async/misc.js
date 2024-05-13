function timenow() {
  const currentdate = new Date();
  const datetime =
    currentdate.getSeconds();
  return datetime;
}
console.log("started at: ", timenow());

function hello() {
  console.log("hello");
}

function complicatedCalculation() {
  // Perform a complex mathematical operation
  let result = 0;
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 1000; j++) {
      result += Math.sqrt(i * j) * Math.sin(i) * Math.cos(j);
    }
  }
  return result;
}

console.log(`printing at ${timenow()}th second, here we go`);

setTimeout(() => {
  console.log(`printing at ${timenow()}th second, the 0th value`);
}, 2000);

console.log(`printing at ${timenow()}th second, the 1st value`);

console.log(`printing at ${timenow()}th second, the 2nd value`);

complicatedCalculation()

console.log( `printing at ${timenow()}th second, the 3nd value.`, "the above function stopped others from executing.");

console.log(`printing at ${timenow()}th second, the 4th value`);

setTimeout(() => {
  console.log(
    `printing at ${timenow()}th second, the 5th value, after fuckin 4 seconds but not stopping someone as I am async.`
  );
}, 4000);


console.log(`printing at ${timenow()}th second, the 6th value`);
