// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE


var fortune = 8;

if ((0 <= fortune) && (fortune <= 3)){
    console.log("you have a poor fortune");
}
if ((4 <= fortune) && (fortune <= 7)){
    console.log("you have an ok fortune");
}
if ((8 <= fortune) && (fortune <=10)){
    console.log("You have a great fortune");
}
else{
    console.log("A fortune can't be determined");
}
