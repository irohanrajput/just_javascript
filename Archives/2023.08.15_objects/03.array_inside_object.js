// This is an example of an array inside an object

const student1 = {
    fname: "Rohan",
    lname: "Rajput",
    marks: {maths : 79, english: 94}, 
    strength: ["stubborn", "honest"], //array 
}


// to access these values

console.log(student1.marks.maths);

// function to print everything

function printDetails(studentNumber){
    console.log("Student Name: " + studentNumber.fname +" " + studentNumber.lname);
    console.log(studentNumber.marks);
    console.log(studentNumber.strength);

}

printDetails(student1)