// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerString = "abcdefghijklmnop"
var lowerArray = lowerString.split("");
console.log(lowerArray)
var upperString = "ABCDEFG"
var upperArray = upperString.split("");
console.log(upperArray)



function askForOptions() {
    var length = parseInt(prompt("How Long?"));
    console.log(length);

    var isUpper = confirm("Uppercase Included?");
    console.log(isUpper)
    var isLower = confirm("lowercase Included?");
    console.log(isLower)

    if(isLower === false && isUpper === false) {
        alert("Must choose one type");
        return;
    }

    const options = {
        length,
        isUpper,
        isLower
    }
    return options

}

function generatePassword() {
    var options = askForOptions()
    console.log(options)
    var superArray = [];
    var result = [];

    if(options.isLower === true) {
        superArray = superArray.concat(lowerArray)
    }
    if(options.isUpper === true) {
        superArray = superArray.concat(upperArray)
    }
    console.log(superArray)

    for(var i = 0; i < options.length; i++) {
        var index = Math.floor(Math.random() * superArray.length)
        console.log(index)
        var digit = superArray[index];
        result.push(digit)
        console.log(result)


    }
    return result.join("")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
