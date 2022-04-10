// Assignment code here
function generatePassword(){
  var password = "";
  var length = getLength();
  var availableType = [];
  var input = false;

  //loop to make sure user inputs at least one type for password
  while(availableType.length === 0){
    //prompt for each input and add corresponding number to array
    input = window.confirm("Would you like to use uppercase?");
    if (input){
      availableType.push(1);
    }
    input = window.confirm("Whould you like to use lowercase?");
    if (input){
      availableType.push(2);
    }
    input = window.confirm("Whould you like to use numbers?");
    if (input){
      availableType.push(3);
    }
    input = window.confirm("Whould you like to use special characters?");
    if (input){
      availableType.push(4);
    }

    if(availableType.length === 0){
      window.alert("Please choose at least one type to generate a password");
    }
  }

  for (var i =0; i < length; i++){
    //pick random number from type array and put it into switch statement to call function, then add it to the password string
    var type = availableType[Math.floor(Math.random() * availableType.length)];
    switch(type){
      case 1:
        password += getRandomUpper();
        break;
      case 2:
        password += getRandomLower();
        break;
      case 3:
        password += getRandomNumber();
        break;
      case 4:
        password += getRandomSpecial();
        break;
      default:
        console.log("Problem in the switch statment");
    }

  }

  return password;
};
function getLength(){
  var validResponse = false;

  while(!validResponse){

    //prompt for length and loop until a valid input is given
    var passLength = window.prompt("How long do you want your password to be (between 8 and 128 characters)");
    passLength = parseInt(passLength);
    if (passLength >= 8 && passLength <= 128){
      validResponse = true;
    }
    else{
      window.alert("Invalid input. Please choose a number between 8 and 128");
    }
  }
  return passLength;
}
function getRandomUpper(){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index = Math.floor(Math.random() * upper.length);

  return upper.charAt(index);
}
function getRandomLower(){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var index = Math.floor(Math.random() * lower.length);

  return lower.charAt(index);
}
function getRandomNumber(){
  var num = "1234567890";
  var index = Math.floor(Math.random() * num.length);

  return num.charAt(index);
}
function getRandomSpecial(){
  var special = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var index = Math.floor(Math.random() * special.length);

  return special.charAt(index);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
