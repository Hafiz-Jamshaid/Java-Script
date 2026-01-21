// const darazUser = new Object()
const darazUser = {}

darazUser.id = "123abc"
darazUser.name = "Jamshaid"
darazUser.isLoggedIn = false

// console.log(darazUser);

const regularUser = {
    email: "jamshaid@google.com",
    fullname: {
        userfullname: {
            firstname: "Hafiz",
            lastname: "Jamshaid",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        name: "jamshaid",
        city: "lahore"
    },
    {
        name: "fahad",
        city: "sheikhupura"
    },
    {
        name: "faraz",
        city: "Islamad",
    },
]
// console.log(users[1]);

console.log(darazUser);
console.log(Object.keys(darazUser));
console.log(Object.values(darazUser));
console.log(Object.entries(darazUser));

console.log(darazUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Java Script",
    price: "1000",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Jamshaid",
//     "coursename": "java script",
//     "price": "free"
// }

[
    {},
    {},
    {}
]