// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567892423423333333n



// Reference type (non-primitive)

// Array, Objects, Functions

const heros = ["Iron man", "Thor", "Loki"]
{
    name: "Jamshaid"
    age: 22
}
let myobj ={
    name: "Jamshaid",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

//=======++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "Jamshaid@gmail.com"

let anotherName = myYoutubeName
anotherName = "Jamshaidahmed@gmail.com"

console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "User123@gmail.com",
    userName: "Jamshaid"
}

let userTwo = userOne
userTwo.email = "User@gmail.com"
userTwo.userName = "Faraz"
// userTwo = {
//     email:"User@gmail.com",
//     userName: "Faraz"
// }

console.log(userOne);
console.log(userTwo);