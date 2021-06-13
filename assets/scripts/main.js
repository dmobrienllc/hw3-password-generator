// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var passwordRules={
  pwdLength:0,
  useLower:false,
  useUpper:false,
  useNumeric:false,
  useSpecialChars:false,
  writeValues: function(){
    "Password Length: " +this.pwdLength +
    "\nUse Lower Case: " + this.useLower +
    "\nUse Upper Case: " + this.useUpper +
    "\nUse Numeric Chars: " + this.useNumeric +
    "\nUse Special Chars: " + this.useSpecialChars 
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordCritera = document.querySelector("#password-criteria");

  passwordText.value = password;
  passwordCritera.value = passwordRules.writeValues();
}

//Called functions
function generatePassword() {

  passwordRules.pwdLength = getNumberOfCharacters();
  passwordRules.useLower = confirm("Would you like lowercase characters in your password?");
  passwordRules.useUpper = confirm("Would you like UPPER CASE characters in your password?");
  passwordRules.useSpecialChars = confirm("Would you like special characters in your password");
  passwordRules.useNumeric = confirm("Would you like numeric characters in your password");
  console.log(passwordRules.writeValues());

  //init pwd char vars
  var length = (passwordRules.pwdLength>0)?(passwordRules.pwdLength):(8);
  var alphaChars = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";

    while( password.length<length ) {
      if(passwordRules.useLower)
      {
        alphaCharSelector = Math.ceil(alphaChars.length * Math.random()*Math.random());
        character += alphaChars.charAt( alphaCharSelector );
      }

      if(passwordRules.useUpper)
      {
        alphaCharSelector = Math.ceil(alphaChars.length * Math.random()*Math.random());
        character += alphaChars.charAt( alphaCharSelector ).toUpperCase();
      }
        
      if(passwordRules.useNumeric)
      {
        numCharSelector = Math.ceil(numericChars.length * Math.random()*Math.random());
        character += numericChars.charAt( numCharSelector );
      }
        
      if(passwordRules.useSpecialChars)
      {
        specCharSelector = Math.ceil(specialChars.length * Math.random()*Math.random());
        character += specialChars.charAt( specCharSelector );
      }
      
      password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,passwordRules.pwdLength);
}


function getNumberOfCharacters(){
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



// function generatePassword( len ) {
//   var length = (len)?(len):(10);
//   var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//   var numeric = '0123456789';
//   var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//   var password = "";
//   var character = "";
//   var crunch = true;
//   while( password.length<length ) {
//       entity1 = Math.ceil(string.length * Math.random()*Math.random());
//       entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
//       entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
//       hold = string.charAt( entity1 );
//       hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
//       character += hold;
//       character += numeric.charAt( entity2 );
//       character += punctuation.charAt( entity3 );
//       password = character;
//   }
//   password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//   return password.substr(0,len);
// }
