const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//objects ko iterate krne ke liye for in loop hota hai
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); //myObject[key] se uss key ki value nikal aayegi object mei se
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//for in loop agr array pe use karoge aur uski iterator ko direct print karoge toh uski keys print ho jayengi array ki jo ki uska index hota hai jo ki zero se start hota hai
//aur objects ka design hua hi isiliye tha kyuki array ki keys by default 0,1,2,3.. number hi hoti hai se start hoti lekin object mei hummm key ko customize kr skte

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//map iterable nhi hai for in loop ke liye