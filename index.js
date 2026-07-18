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
