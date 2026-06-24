
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
//sayMyName sirf likhenge toh uska matlb hota h function ka reference and agr saath mei () laga dia naam ke baad toh wo hota h function ka execution

// function addTwoNumbers(number1, number2){ //parameters ka type dena jaruri nhi hai toh wo problem create karta hai agr number mei numnber ki jagah kuch aur aa gy toh

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result//return ke baad koi statement execute nhi hota
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //default parameter value is sam
    if(!username){ //undefined by default is considered as false 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // string bhi return kr skte
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// agar koi argument pass nhi karenge toh function ya toh apni default value le lega ya fir undefined consider karega usko parameter ko

function calculateCartPrice(val1, val2, ...num1){ //shopping cart mei humme pata nhi hota ki kitne item abhi aur add honge toh jaise jaise item aate rehte waise waise unhe hum add krte rehna 
    //... ko hi rest operator bolte aur isse ko hi spread operator kehte bs use case pe depend krta ki kb ky hai
    //bikhre hue data ko ek array mei store krne ke liye
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))// ek hi variable mei multiple values store krne mei rest operator kaam aayega
//kyuki val1 aur val2 bhi hai toh num1 mei last ki do value jayengi bs

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ //anyobject is not a keyword it is a just a variable for any object that can be passed in the function
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})//direct object bana ke pass krdia function calling mei hi

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){//getArray is same as anyobject
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));