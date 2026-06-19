// Dates

let myDate = new Date()
// console.log(myDate.toString());//gives date and time in string format
// console.log(myDate.toDateString());//gives only date in string format
console.log(myDate.toLocaleString());//gives date and time in local format
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()//.now returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {// date time ka format customize krne ke liye hum tolocalestring ka use krte hai
    weekday: "long",// ye weekday ka full name dega jaise monday, tuesday etc instead of mon tue etc
    month: "long",// ye month ka full name dega jaise january, february etc
    day: "2-digit",// ye day ka 2 digit number dega jaise 01, 02, 03 etc

})

