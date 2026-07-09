//ARRAY(strings bhi) SPECIFIC LOOPS HAIN YE SB

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {// iss loop mei bs iterator declare krke batana hota ki konsi cheez pe iterate krna 
    //console.log(num);
}//koi increment nhi decrement nhi aur condition bhi nhi chahiye khud array ki lenght ke hisaab se le leta hai

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps(data type/structure)->unique values hoti hain aur object hota hai
// key-value pair hold krta hai aur original insertion order ko maintain rkhta hai
// Any value can be used as key
// duplicate values nhi hoti
// map iteratable hota hai

const map = new Map()
//map.set(key,value)
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //duplicate


// console.log(map);

for (const [key, value] of map) {// destructure krne ke liye [key, value] use kiya hai taaki key aur value dono ko access kr ske, sirf key likhenge toh wo as a variable treat hoga aur key value pair ko saath mei de dega
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//for of loop se object iterate nhi kr skte sirf arrays,maps,strings kr skte