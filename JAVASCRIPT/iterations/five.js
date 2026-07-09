//ARRAY MEI USE HONE WAALA SABSE JYDA LOOP-> for each loop
//kuch ye loop array ki property mei directly inject kiya gaya hai

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){// kyuki for each loop array ki property mei hi defined h toh humm usse dot se access kr skte hain
//     console.log(val);
// } )

//forEach loop mei andar humme ek callback function dena hota hai as a parameter
//callback function normal function jaisa hi hota hai bs uska naam nhi likhte hain
// Basic Syntax of ForEach below -->
// array.forEach( function (//name(name nhi likhte)) (item/val(iterator k naam jo harr value pe jayega)){
//      funtion definition jo bhi array ke uss particular item ke saath tum krna chahte wo duntion definition mei likh do
//} )
//harr baar ye callback function execute hoga aur harr baar ye item ko as a parameter apne andar leke aayega aur function defition mei likha task execute karega


// coding.forEach( (item) => {
//     console.log(item);
// } )

//forEach mei callback function ke liye hum arrow function ka bhi istemaal kr skte hain bs kisi variable name mei usse store nhi krna hai

// function printMe(item){
//     console.log(item);
// }

//forEach mei humm ek function bahar define krke uska reference as a parameter pass kr skte hain forEach mei lekin yaad rkhna bs reference pass krna hai usse () laga ke naam ke aage execute nhi krna 

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//forEach loop mei hum har ek item ko toh access kr hi rhe hain uske saath humm index aur poora array bhi access kr skte hain har baar multiple arguments pass krke


//array of objects pe bhi kaam krta hai forEach
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);//obejct ka access kitni easily mil gya
} )