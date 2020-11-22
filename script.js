//Assignment Code

const generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Alert user to start password creation
  const totalLength = prompt(
    "How many characters should your new password be?");

  if (totalLength >= 8 && totalLength <= 128) {

    alert(`Your new password will be ${totalLength} characters long.`);

    // Prompt user for password criteria
    let upper = confirm("Would you like to include upper case letters?");
    let lower = confirm("Would you like to include lower case letters?");
    let number = confirm("Would you like to include numbers?");
    let symbol = confirm("Would you like to include special characters?");
    let allChars = "";
    let password = "";

    //Validate user input
    if (upper) {
      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lower) {
      allChars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (number) {
      allChars += "0123456789";
    }

    if (symbol) {
      allChars += "~`!@#$%^&*()_-+={[}]}|\:;'<,>.?/";
    }
    
    //Generate new password that fufills selected criteria
    for (i = 0; i < totalLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;} 
  
    else {
    alert("Your password must be at least 8 to 128 characters & can include upper case, lower case, numbers, and/or special characters. Let's try again.");
  }
}

// Display new password to the text area:
function displayPassword() {

  let newPassword = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

//Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);
