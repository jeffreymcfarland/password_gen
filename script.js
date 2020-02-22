
var userLength = prompt("How many characters do you want in your password? (8-128)");
var userUpperCase = confirm("Would you like your password to have uppercase letters?");
var userLowerCase = confirm("Would you like your password to have lowercase letters?");
var userNumbers = confirm("Would you like your password to have numbers?");
var userCharacters = confirm("Would you like your password to have any special characters?");
// These prompt and confirm functions will make the user define the sum variable.


if (userUpperCase) {
  upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  upCase = "";
};

if (userLowerCase) {
  lowCase = "abcdefghijklmnopqrstuvwxyz";
} else {
  lowCase = "";
};

if (userNumbers) {
  num = "1234567890";
} else {
  num = "";
};

if (userCharacters) {
  char = "!@#$%&?/^*";
} else {
  char = "";
};
// These if/else statements determine what chatacters will be included in the password according to how the user answers the prompts.


var choices = {
  upperCase: upCase,
  lowerCase: lowCase,
  numbers: num,
  characters: char
}
// The variable "choices" holds the variables for each prompt the user had to answer.



var sum = upCase + lowCase + num + char;
var random = "";
for (var i=0; i<userLength; i++) {
    var rnum = Math.floor(Math.random() * sum.length);
    random += sum.substring(rnum, rnum+1)  
}
// This section adds the sum of the "choices" variable, creates a new variable called "random", then for loops through the characters with a math.random method to create the random password.



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = random;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

