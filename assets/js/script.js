
// Assignment code here
function generatePassword() {
    
    //get password length from user
    let len = prompt('What is the length of the password? (8-128)');

    //validate the password length entered by user
    if (len < 8 || len > 128) {
        alert('Password length does not meet the criteria, try again.');
        return generatePassword();
    };
    
    //ask user character criteria 
    let upper = confirm('Would you like uppercase letters in your password?'); 
    let lower = confirm('Would you like lowercase letters in your password?'); 
    let numeric = confirm('Would you like numeric characters in your password?');
    let special = confirm('Would you like special characters in your password?'); 

    //validate that the user selected at least one of the character criteria
    if (!upper && !lower && !numeric && !special) {
        alert('You have not selected any character criteria, try again.');
        return generatePassword();
    }
    
    //put valid characters from user into an array
    let temp = "";
    if(upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lower) temp += "abcedfghijklmnopqrstuvwxyz";
    if(numeric) temp += "0123456789";
    if(special) temp += "!@#$%^&*()?-";

    //generate a password from the valid character array and user length
    let password = '';
    for(let i = 0;i<len;i++) {
        password += temp[Math.floor(Math.random() * temp.length)]
    }
    return password;
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