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
// Make function to happen after event listener
function generatePassword() {
  var charstotal = prompt("How many character would your like your password to be? Must be 8 - 128")
  if (charstotal = null) {
    console.log("canceled")
  }
  while ((charstotal < 8) || (charstotal > 128) || (isNaN(charstotal) === true)) {
    alert("Password Length must be a number that contains between 8 and 128 chacters")
    charstotal = prompt("How many character would your like your password to be? Must be 8 - 128")
  }
  // Add all confirming questions for people to answer
  var isLowercase = confirm("Do you want to have lower case characters?")
  var isUppercase = confirm("Do  you want to have upper case characters")
  var isSpecialcase = confirm("Do you want to include special characters?")
  var hasNumbers = confirm("Do you want numbers?")
// Add all the different variables/arrays for the choices
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var specialcase = "~!@#$%^&*()"
  var characterbank = ""
  var newpw = ""
// Add if statements and add to the bank holding the responses if true
  if (isLowercase === true) {
    characterbank = characterbank.concat(lowercase)
  }
  if (isUppercase === true) {
    characterbank = characterbank.concat(uppercase)
  }
  if (isSpecialcase === true) {
    characterbank = characterbank.concat(specialcase)
  }
  if (hasNumbers === true) {
    characterbank = characterbank.concat(number)
  }
  // Add a function that will randomize the bank holding all of the different choices
  function random(max) {
    return [Math.floor(Math.random() * max)]
  }
//  Add the new variable that will take place of the password that will reflect on user screen
  for (var i = 0; i < charstotal; i++) {
    newpw = newpw.concat(characterbank.charAt(random(characterbank.length - 1)))
  }
// Make new pw return
  return newpw
}
