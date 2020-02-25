
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // Function for password generate button.

  var length = prompt("How long would you like your password to be? (Must be between 8-128 characters)");

  if(length < 8) {
    var length = prompt("Please enter valid length (must be between 8-128)");
  } else {
  };

  if(length > 128) {
    var length = prompt("Please enter valid length (must be between 8-128)");
  } else {
  };


  var upper = confirm("Would you like your password to have uppercase letters?");
  var lower = confirm("Would you like your password to have lowercase letters?");
  var num = confirm("Would you like your password to have numbers?");
  var char = confirm("Would you like your password to have special characters?");

  // These prompt and confirm functions will make the user define the sum variable.

  

  if(upper) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    var upperCase = "";
  };

  if(lower) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    var lowerCase = "";
  };

  if(num) {
    var number = "1234567890";
  } else {
    var number = "";
  };

  if(char) {
    var characters = "!!@@##$$%%&&??";
  } else {
    var characters = "";
  };

  // These if/else statements determine what chatacters will be included in the password according to how the user answers the prompts.


  var random = "";
  var sum = upperCase + lowerCase + number + characters;

  for(i=0; i<length; i++) {
    var rnum = Math.floor(Math.random() * sum.length);
    random += sum.substring(rnum, rnum+1)
  };

  // This section adds answers from earlier prompts and creates sum variable, creates a new variable called "random", then for loops through the characters with a math.random method to create the random password.


  var passwordText = document.querySelector("#password");

  passwordText.value = random;

  // Inputs the value of variable random onto the page.


}
generateBtn.addEventListener("click", writePassword);