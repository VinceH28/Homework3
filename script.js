//Assignment Code

const generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Alert user to start password creation

  const totalLength = prompt(

    "How many characters should your new password be?"

  );

  if (totalLength >= 8 && totalLength <= 128) {

    alert(`Your new password will be ${totalLength} characters long.`);

    // Prompt user for password criteria

    let upper = confirm("Would you like to include upper case letters?");

    let lower = confirm("Would you like to include lower case letters?");

    let symbol = confirm("Would you like to include special characters?");

    let number = confirm("Would you like to include numbers?");

    let allChars = "";

    let password = "";

    //Validate user input

    if (upper) {

      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lower) {

      allChars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (symbol) {

      allChars += "~`!@#$%^&*()_-+={[}]}|\:;'<,>.?/";
    }

    if (number) {

      allChars += "0123456789";
    }

    //Generate new password that fufills selected criteria

    for (i = 0; i < totalLength; i++) {

      password += allChars.charAt(Math.floor(Math.random() * allChars.length));

    }

    return password;

  } else {

    alert("Your password must be at least 8 to 24 characters. Let's try again.");

  }

}


// Display new password to the text area:

function generatePassword() {

  let newPassword = generatePassword();

  let passwordText = document.querySelector("#password");



  passwordText.value = newPassword;

}



//Add event listener to generate button

generateBtn.addEventListener("click", displayPassword);



/*var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

*/
