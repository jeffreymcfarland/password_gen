
var userLength = prompt("How many characters do you want in your password? (8-128)");
var userUpperCase = confirm("Would you like your password to have uppercase letters?");
var userLowerCase = confirm("Would you like your password to have lowercase letters?");
var userNumbers = confirm("Would you like your password to have numbers?");
var userCharacters = confirm("Would you like your password to have any special characters?");


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


var choices = {
  upperCase: upCase,
  lowerCase: lowCase,
  numbers: num,
  characters: char
}

console.log(choices);


var sum = upCase + lowCase + num + char;
var random = "";
for (var i=0; i<userLength; i++) {
    var rnum = Math.floor(Math.random() * sum.length);
    random += sum.substring(rnum, rnum+1)  
}


console.log(random);




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

