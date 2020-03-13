generate.onclick = function clickbutton() {

  var passwordlength = prompt("Choose a number of characters between 8 and 128");

    if (passwordlength < 8 || passwordlength > 128){
      alert("invalid number modafoka");
      return;
    } else {}

  alert("You must choose at least one criteria for your password");
    
  var promptlowerlet = confirm("Do you want to include lowercase letters in your password?");
  var promptupperlet = confirm("Do you want to include uppercase letters in your password?");
  var promptnumber = confirm("Do you want to include numbers in your password?");
  var promptspecialchar = confirm("Do you want to include special characters in your password?");

  if (promptlowerlet === false && promptupperlet === false && promptnumber === false && promptspecialchar === false){
    alert("Try again dude")
    return;
  } else {}

     generatePassword(promptlowerlet, promptupperlet, promptnumber, promptspecialchar, passwordlength);
    


}

function generatePassword(promptlowerlet, promptupperlet, promptnumber, promptspecialchar, passwordlength) {

    var lower = "abcdefghijklmnopqrstuvwxyz";
          if( promptlowerlet === false) {
            lower = "";
          } else {}
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          if( promptupperlet === false) {
            upper = "";
          } else {}
        numbers = "0123456789";
          if( promptnumber === false) {
            numbers = "";
          } else {}
        special = "!#$%&'\"()*+,-./:;<=>?@[\]^_`{|}~";
          if( promptspecialchar === false) {
            special = "";
          } else {}

      passwordready = "";
      totalsize = lower + upper + numbers + special;

  for (var i = 0; i < passwordlength; ++i) {
    passwordready += totalsize.charAt(Math.floor(Math.random() * totalsize.length));
  }
  console.log("Your password is: " + passwordready);
  return passwordready;
}

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