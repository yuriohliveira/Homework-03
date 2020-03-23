// setting a global variable as empty string to store the password and another for total available characters
  var password = "";
  var totalsize = "";

// setting a click function for the GENERATE PASSWORD button
  generate.onclick = function clickbutton() {

// asking the user to choose a size between 8 and 128 for his random password
  var passwordlength = prompt("Choose a number of characters between 8 and 128");

    if (passwordlength < 8 || passwordlength > 128){
      alert("invalid number");
      return;
    }

// asking the user to choose at least one from the 4 possible criterias, then passing 4 boolean variables and the password length
// through the function

    alert("You must choose at least one criteria for your password");
    
    var Lower = confirm("Do you want to include lowercase letters in your password?");
    var Upper = confirm("Do you want to include uppercase letters in your password?");
    var Numbers = confirm("Do you want to include numbers in your password?");
    var specialChar = confirm("Do you want to include special characters in your password?");

// condition for moving on (at least 1 criteria must be set)

    if (Lower === false && Upper === false && Numbers === false && specialChar === false){
      alert("Try again dude")
      return;
    } else {

// calls generatePassword function
      generatePassword(Lower, Upper, Numbers, specialChar, passwordlength);
    }

  }

// function to generate the password, using previous parameters
  function generatePassword(Lower, Upper, Numbers, specialChar, passwordlength) {

// resets password to empty string in case the user uses it more than once
    password = "";

// sets all possible characters in 4 strings, and sets them to empty if the user chooses not to include them

    var lower = "abcdefghijklmnopqrstuvwxyz";
          if( Lower === false) {
            lower = "";
          }

        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          if( Upper === false) {
            upper = "";
          }

        numbers = "0123456789";
          if( Numbers === false) {
            numbers = "";
          }

        special = "!#$%&'\"()*+,-./:;<=>?@[\]^_`{|}~";
          if( specialChar === false) {
            special = "";
          }

// string containing the total amount of characters the user chooses to include
      totalsize = lower + upper + numbers + special;

// takes a random number, multiplies by totalsize length, makes it integer and makes it an index for totalsize string, then adds to the
// password
  for (var i = 0; i < passwordlength; ++i) {
    password += totalsize.charAt(Math.floor(Math.random() * totalsize.length));
  }
  
// calls function to write password on the website
  writePassword();
  }

// Write password to the #password input
  function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }