let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el");
let count = 0;

console.log(saveEl);

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let textNum = count + " - ";
saveEl.textContent += textNum;
countEl.textContent = 0;
count = 0;
};
let welcomeEl = document.getElementById("welcome-el");

let name = "Ndiko";
let greeting = "You are well come to this page";
welcomeEl.innerText = greeting + " " + name;
// 1. Grab the save-el paragrah and store it in a variable called;
let apple = "miracle";
let mango = "4";
console.log(apple + mango);

// You can test this out using your develeper console//

let username = "per";
let message = "you have 3 new noticefications";
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);
console.log(message + ", " + username + "!");
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText


// trying javaScript string Length property //
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
// javaScript string charAt() method //
let text1 = "HELLO WORLD";
let code = text1[1];
console.log(code);
let text2 = "Hello";
let text3 = "World";
let text4 = text1.concat(" ", text2);
console.log(text4);
// javaScript string slice() //
let text5 = "Apple, Banana, Kiwi";
let part = text5.slice(-12, -6);
console.log(part);
// JavaScript string subString() //
let str = "Apple, Banana, Kiwi";
let res = str.substring(7);
console.log(res);
// javaScript LowerCase() method //
let text6 = "HELLO WORLD";
let result = text6.toLowerCase();
console.log(result);
// JavaScript with padStart() //
let numb = 5;
let pad = numb.toString();
let padded = pad.padEnd(4, "X");
console.log(padded);
// JavaScript String repeat() //
let text7 ="Hello World! ";
let result1 = text7.repeat(5);
console.log(result1);
// Javascript replace()//

