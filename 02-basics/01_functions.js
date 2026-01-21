function sayMyName (){
    console.log("J");
    console.log("A");
    console.log("M");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("D");
}

//  sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loggedInMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}

// console.log(loggedInMessage("Jamshaid"))
console.log(loggedInMessage("Jamshaid"))