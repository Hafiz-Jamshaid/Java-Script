// Singleton
// Object.create

// Object Literal

const sym = Symbol("mykey1")

const jsUser = {
    name: "Jamshaid",
    "full name": "Hafiz Jamshaid",
    age: 27,
    [sym]: "mykey2",
    location: "Lahore",
    email: "hafizjamshaid123@gmail.com",
    password: "maria123",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[sym]);

jsUser.email = "jamshaidahmed@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "jamshaid@gmail.com"
console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello Js User");
    
}
jsUser.greeting2 = function (){
    console.log(`Hello Js User ${this["full name"]}`);
    console.log(`Hello Js User ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
