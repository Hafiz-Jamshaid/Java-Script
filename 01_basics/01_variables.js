const accountId = 12345
let accountName = "Jamshaid"
let accountPassword = "1234"
let accountCity = "Lahore"
let accountState;

// accountId = 5678 // not allowed to change

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountName = "Jarvis"
accountPassword = "3456"
accountCity = "Sheikhupura"
accountState;

console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity, accountState])