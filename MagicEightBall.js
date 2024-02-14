// Challenge 3 : Magic Eight Ball ----->

/* 1- initialize a variable userName with an empty string :
2-  check userName :
*/

let userName = "Clode";
userName === "Jane" ? console.log("Hello, Jane!") : console.log("Hello!");

// 3- userQuestion :
let userQuestion = "What will my luck be today?";
console.log(`${userName} Ask : ${userQuestion}`);

// 4- response from the magic eight ball : generate a random number between 0 and 7 :

let randomNumber = Math.floor(Math.random() * 8);
console.log(Math.floor(randomNumber));

// 4- print a different responses / switch on the value of the random number :
let eightBall = randomNumber;
switch (randomNumber) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
  default:
    console.log("Signs point to yes");
    break;
}

// 5- use if, else if, and else statements to achieve the same functionality as the switch statement :

if (randomNumber === 0) {
  console.log("It is certain");
} else if (randomNumber === 1) {
  console.log("It is decidedly so");
} else if (randomNumber === 2) {
  console.log("Reply hazy try again");
} else if (randomNumber === 3) {
  console.log("Cannot predict now");
} else if (randomNumber === 4) {
  console.log("Do not count on it");
} else if (randomNumber === 5) {
  console.log("My sources say no");
} else if (randomNumber === 6) {
  console.log("Outlook not so good");
} else {
  console.log("Signs point to yes");
}
