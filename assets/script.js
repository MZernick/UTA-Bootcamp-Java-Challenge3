var newPassword = "";
    
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!",".","#","$","%","&","*"];

function createPassword() {
var passLength =window.prompt("Would you like to include numbers?");
var passLength = toLowerCase();
if (passLength == "yes"){
    var newPassword1 = numbers[Math.floor(Math.random()*numbers.length)] +numbers[Math.floor(Math.random()*numbers.length)]+numbers[Math.floor(Math.random()*numbers.length)];
    alert ("Your password will contain " + newPassword1);
} else{
    var newPassword2 = specialCharacters[Math.floor(Math.random()*specialCharacters.length)] +specialCharacters[Math.floor(Math.random()*specialCharacters.length)]+specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    var newPassword1 =("");
};
var passLetters = window.prompt("Would you like to include letters?");
var passLetters = toLowerCase();
if (passLetters == "yes"){
    var newPassword = letters[Math.floor(Math.random()*letters.length)] +letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)];
    alert ("Your password will contain " + newPassword + newPassword1);
}
else {
    var newPassword1 = numbers[Math.floor(Math.random()*numbers.length)] +numbers[Math.floor(Math.random()*numbers.length)]+numbers[Math.floor(Math.random()*numbers.length)]+numbers[Math.floor(Math.random()*numbers.length)];
    alert ("Your password will contain " + newPassword1);
    var newPassword =("");
};
var passSpecial =window.prompt("Would you like to include special characters?")
var passSpecial = toLowerCase();
if (passSpecial == "yes"){
    var newPassword2 = specialCharacters[Math.floor(Math.random()*specialCharacters.length)] +specialCharacters[Math.floor(Math.random()*specialCharacters.length)]+specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    alert ("Your password will contain " + newPassword + newPassword1 + newPassword2);
}else {
    var newPassword = letters[Math.floor(Math.random()*letters.length)] +letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)];
    alert ("Your password will contain " + newPassword + newPassword1); 
    var newPassword2 =("");
};


 alert("Your new password is: " +newPassword+newPassword1+newPassword2 );

};
createPassword();