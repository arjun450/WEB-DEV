//objects ko declare karne ke do tarike hote hai
//ek literal ki tarah aur dusra constructor ki tarah

// singleton
//singleton ka matlab hota hai ki ek hi object ka ek hi instance hoga ye constructor function ke through hi banega

// Object.create //yehi h constructor method ke thru obejct banane ke liye. isse singleton banta h

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",   //name is key and "Hitesh" is value and the key is always string and value can be anything
    "full name": "Hitesh Choudhary", //agr key ko humne explicitly string me likha h to usko access karne ke liye humko bracket notation use karna padega
    [mySym]: "mykey1",  //symbol ko as a key use karne ke liye humko square bracket me usko likhna padega otherwise wo as a string treat hoga
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //freeze karne ke baad hum object ke properties ko change nahi kar sakte hai
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ //function as a variable hi treat karta h JS
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// this se current object ko reference kr skte 
}

console.log(JsUser.greeting()); //() nhi lagayenge toh function ka reference aayega pr function execute nhi hoga
console.log(JsUser.greetingTwo());