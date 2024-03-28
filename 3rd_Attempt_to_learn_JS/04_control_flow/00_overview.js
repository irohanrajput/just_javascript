// If statement
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}



// Switch statement
switch (expression) {
    case value1:
        // Code to be executed if expression matches value1
        break;
    case value2:
        // Code to be executed if expression matches value2
        break;
    default:
        // Code to be executed if expression doesn't match any case
}

// Example:
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's almost the weekend");
        break;
    default:
        console.log("It's a regular day");
}



// For loop
for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
}

// Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}



// While loop
while (condition) {
    // Code to be executed as long as the condition is true
}

// Example:
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}



// Do-while loop
do {
    // Code to be executed at least once, then as long as the condition is true
} while (condition);

// Example:
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);

