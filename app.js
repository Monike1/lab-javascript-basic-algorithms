// Names and input
var hacker1 = "John";
var hacker2 = prompt("What's a navigator's name?");


console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Conditionals


if (hacker1.length > hacker2.length) {
  console.log("The Driver's name is longer than the navigator's name. It has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
  console.log("The Navigator's name is longer than the driver's name. It has " + hacker2.length + " characters.")
} else {
  console.log("Both names have the same length.")
}

// Loops
// Print all the characters of the driver’s name, separated by a space and in capitals ie. "J O H N"

var splitedName = [];
for (var i = 0; i < hacker1.length; i++) {
  splitedName.push(hacker1[i].toUpperCase());
  splitedName.push(" ");
}
console.log(splitedName.join(" "));

// Print all the characters of the navigator’s name, in reverse order. ie. "nhoJ"
function reverse(str){
  return str.split("").reverse().join("");
}
console.log(reverse(hacker2));

// Depending on the lexicographic order of the strings, print:
// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same names

// localCompare method
// localeCompare results in values: -1, 1, 0
function alphabet(name1, name2) {
  var compareResult = name1.localeCompare(name2);
  if (compareResult === -1) {
    console.log(`${name1} goes first`);
  } else if (compareResult === 1) {
    console.log(`${name2} goes first`);
  } else {
    console.log('Wow, you have the same name');
  }
}
alphabet(hacker1, hacker2);

// Ask the user for a new string and check if it’s a Palindrome
var stringToCheck = prompt("Write a sentence and check if it is a Palindrome!");
function checkPalindrome(stringToCheck) {
  
  console.log(stringToCheck);
  var checkedString;
  var reversedString;
  var result;
  checkedString = stringToCheck.split(" ").join("")
                    .replace( /[\W]+/g, "")
                    .toLowerCase();
  reversedString = checkedString.split("").reverse(). join("");
  
  if (checkedString === reversedString) {
    result = "The string is a Palindrome"
  } else {
    result = "The string is not a Palindrome"
  }
  
  return result;
}

  console.log(checkPalindrome(stringToCheck));
  




