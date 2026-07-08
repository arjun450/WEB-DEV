const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//waise toh falsy values ke alawa saari values truthy values hain pr neeche likh diye hain kuch special cases

//truthy values->

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {//empty array ko check krne ka tareeka
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//empty object check krne ke liye object ki keys ka array bana ke uski length check kr lenge
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null , undefined

let val1;
// val1 = 5 ?? 10 //isme val1 mei 5 jayega
// val1 = null ?? 10 //safety check ki tarah kaam karta hai ye oprator ki database se null aa jaye toh usse check krke dekhe koi aur value aa skti ky
// val1 = undefined ?? 15 //isme 15 aayega
val1 = null ?? 10 ?? 20 // isme 10 assign hoti first value after null or undefined



console.log(val1);

// Terniary Operator -> shorthand form of if else

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")