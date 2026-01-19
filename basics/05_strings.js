const name = "Jamshaid"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`My Name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('jamshaid')
// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.anchor()); // this is HTML element
// console.log(gameName.at(7));
// console.log(gameName.big()); // this HTML element
// console.log(gameName.blink()); // this HTML element
// console.log(gameName.bold()); // this is HTML element
// console.log(gameName.charAt(4));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "    Jamshaid      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://jamshaid@gmail.com/jamshaid"
console.log(url.replace('@', '$'));
console.log(url.includes('jamshaid'));

const gameNum = "Ja-msh-aid"
console.log(gameNum.split('-'));
