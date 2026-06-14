"use strict"; //treat all js code as newer version of js waise automatically treat karta hai but ye explicitly likhne se better hota hai

// alert( 3 + 3 ) //alert ke liye browser me hi run karna padega node me nahi chalega .. alert ke liye different syntax use hota h node mei

console.log(3 +3) //ye dono mei chal jaayega browser and node dono mei

console.log("arjun")
//code readability ke high rkhna h

let name="Arjun" //string
let age=18 //number
let isloggedin=false //boolean

//datatypes in js
//number => 2 to power 53 -1 tak ke number ko represent kar sakta hai
//bigint => 2 to power 53 -1 se bada number ko represent karne ke liye use hota hai
//string => "arjun" ya 'arjun' ya `arjun` (backtick) ye teen tareeke se string ko represent kar sakte hai
//boolean => true ya false
//Null => null ka matlab hai ki variable me koi value nahi hai(KHAALI HAI) but variable ko define kiya hai
//undefined => variable ko define kiya hai but usme koi value assign nahi kiya hai
//object => object ke andar key value pair hota hai
//symbol => unique identifier ke liye use hota hai

console.log(typeof "Arjun"); //typeof operator se variable ka datatype pata kar sakte hai

console.log(typeof Null); //null ka datatype object hai ye js ka bug hai

console.log(typeof undefined); //undefined ka datatype undefined hai