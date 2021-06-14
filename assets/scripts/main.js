// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var passwordInfoDto={
  pwdLength:0,
  useLower:false,
  useUpper:false,
  useNumeric:false,
  useSpecialChars:false,
  password:"",
  writeValues: function(){
    return "Password Length: " + this.pwdLength +
    "\nUse Lower Case: " + this.useLower +
    "\nUse Upper Case: " + this.useUpper +
    "\nUse Numeric Chars: " + this.useNumeric +
    "\nUse Special Chars: " + this.useSpecialChars 
  }
}

function writePassword() {
  var passwordInfoDto = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordCriteria = document.querySelector("#password-criteria");

  passwordText.value = passwordInfoDto.password;
  //passwordCriteria.value = passwordInfoDto.writeValues();
}

//Sets up password criteria and returns object
function generatePassword() {

  passwordInfoDto.pwdLength = validateNumberOfChars();
  passwordInfoDto.useLower = confirm("Would you like lowercase characters in your password?");
  passwordInfoDto.useUpper = confirm("Would you like UPPER CASE characters in your password?");
  passwordInfoDto.useSpecialChars = confirm("Would you like special characters in your password");
  passwordInfoDto.useNumeric = confirm("Would you like numeric characters in your password");

  //init pwd char vars
  var length = (passwordInfoDto.pwdLength>0)?(passwordInfoDto.pwdLength):(8);
  var alphaChars = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var character = "";

    while( passwordInfoDto.password.length<length ) {
      if(passwordInfoDto.useLower)
      {
        alphaCharSelector = Math.ceil(alphaChars.length * Math.random()*Math.random());
        character += alphaChars.charAt( alphaCharSelector );
      }

      if(passwordInfoDto.useUpper)
      {
        alphaCharSelector = Math.ceil(alphaChars.length * Math.random()*Math.random());
        character += alphaChars.charAt( alphaCharSelector ).toUpperCase();
      }
        
      if(passwordInfoDto.useNumeric)
      {
        numCharSelector = Math.ceil(numericChars.length * Math.random()*Math.random());
        character += numericChars.charAt( numCharSelector );
      }
        
      if(passwordInfoDto.useSpecialChars)
      {
        specCharSelector = Math.ceil(specialChars.length * Math.random()*Math.random());
        character += specialChars.charAt( specCharSelector );
      }
      
      passwordInfoDto.password = character;
    }
    passwordInfoDto.password=passwordInfoDto.password.split('').sort(function(){return 0.5-Math.random()}).join('');
    passwordInfoDto.password.substr(0,passwordInfoDto.pwdLength);
    return passwordInfoDto;
}

function validateNumberOfChars(){
  let input = 0;
  while (input = prompt("Please enter desired password length, between 8 and 128 characters!",8)) {
    if (isNaN(input) || 
          (input < 8 || input > 128)) {
      alert("Input must be a number between 8 and 128!");
    } 
    else {
      return parseInt(input);
    }
  }
  alert("Your password will default to 8 characters!");
  return 8;
}

