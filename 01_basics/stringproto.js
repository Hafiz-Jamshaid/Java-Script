const sentence = "jamshaid is a good Human "

let index = 5
let newNumber = '34-32-424'
let capital = "JAMSHAID"

const newString = new String("Jamshaid")
// console.log(`This is my appreciation ${sentence.anchor()}`); // This feature is no longer in use
console.log(`This is my appreciation ${sentence.at(index)}`);
// console.log(`This is my appreciation ${sentence.big()}`); // This feature is no longer in use
// console.log(`This is my appreciation ${sentence.blink()}`); // This feature is no longer in use
// console.log(`This is my appreciation ${sentence.bold()}`); // This feature is no longer in use
console.log(`This is my appreciation ${sentence.charAt(4)}`);
console.log(`This is my appreciation ${sentence.charCodeAt(4)}`);
console.log(`This is my appreciation ${sentence.codePointAt(5)}`);
console.log(`This is my appreciation ${sentence.concat(" " , index)}`);
// console.log(`This is my appreciation ${sentence.constructor("Jamshaid")}`); // anything you want to show otherthan sentence value
console.log(`This is my appreciation ${sentence.endsWith("n")}`);
// console.log(`This is my appreciation ${sentence.fixed()}`); // This feature is no longer in use
// console.log(`This is my appreciation ${sentence.fontcolor()}`); // This feature is no longer in use
// console.log(`This is my appreciation ${sentence.fontsize()}`); // This feature is no longer in use
console.log(`This is my appreciation ${sentence.includes("is")}`);
console.log(`This is my appreciation ${sentence.indexOf("a")}`);
// console.log(`This is my appreciation ${sentence.italics("a")}`); // This feature is no longer in use
console.log(`This is my appreciation ${sentence.lastIndexOf("a")}`);
console.log(`This is my appreciation ${sentence.length}`);
// console.log(`This is my appreciation ${sentence.link()}`); // This feature is no longer in use
console.log(`This is my appreciation ${sentence.localeCompare(index)}`);
// console.log(`This is my appreciation ${sentence.match(index)}`); // need to deep study
// console.log(`This is my appreciation ${sentence.matchAll(index)}`); // need to deep study
// console.log(`This is my appreciation ${sentence.normalize(index)}`); // need to deep study
console.log(`This is my appreciation ${sentence.padEnd(27, ".")}`); // Dots started after the variable count
console.log(`This is my appreciation ${sentence.padStart(27, ".")}`);
console.log(`This is my appreciation ${sentence.repeat( 2)}`);
console.log(`This is my appreciation ${sentence.replace('is', '-')}`);
console.log(`This is my appreciation ${sentence.replaceAll('o', '-')}`);
console.log(`This is my appreciation ${sentence.search(newNumber)}`); // need to deep Study
console.log(`This is my appreciation ${sentence.slice(4, -6)}`); // start after 4 words and except of last 6 words
// console.log(`This is my appreciation ${sentence.small()}`); // This feature is no longer in use 
console.log(`This is my appreciation ${newNumber.split('-')}`);
console.log(`This is my appreciation ${sentence.startsWith('j')}`);
// console.log(`This is my appreciation ${sentence.strike()}`); This feature is no longer in user
// console.log(`This is my appreciation ${sentence.sub()}`); This feature is no longer is use
// console.log(`This is my appreciation ${sentence.substr()}`); This feature is no longer in use
console.log(`This is my appreciation ${sentence.substring(0, 8)}`);
// console.log(`This is my appreciation ${sentence.sup()}`); This feature is no longer in use
console.log(`This is my appreciation ${capital.toLocaleLowerCase()}`);
console.log(`This is my appreciation ${sentence.toLocaleUpperCase()}`);
console.log(`This is my appreciation ${capital.toLowerCase()}`);
console.log(`This is my appreciation ${sentence.toUpperCase()}`);

const map = new Map()
console.log(`This is my appreciation ${map.toString()}`);
// console.log(`This is my appreciation ${map.toWellFormed()}`); need to deep study

const trim = "  Jamshaid       "
console.log(`This is my appreciation ${trim}`);
console.log(`This is my appreciation ${trim.trim()}`);
console.log(`This is my appreciation ${trim.trimEnd()}`);
// console.log(`This is my appreciation ${trim.trimLeft()}`); This feature is no longer in use
// console.log(`This is my appreciation ${trim.trimRight()}`); This feature is no longer in use
console.log(`This is my appreciation ${trim.trimStart()}`);
// console.log(`This is my appreciation ${trim.valueOf()}`); need to deep study
// console.log(`This is my appreciation ${trim.Symbol.()}`); need to deep study
