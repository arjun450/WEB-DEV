// let score="33abc"

// let score="33"

// let score=null

// let score=undefined

// let score= true

let score="arjun"

console.log(typeof score) //kbhi kbhi jb value aati h frontend ya form se toh humme nhi pata hota ki uska datatype kya hai toh uske liye hum typeof operator ka use karte hai

console.log(typeof (score)) //ye bhi same hai upar wale se

let valueInNumber=Number(score) //string ko number me convert karne ke liye Number() function ka use karte hai aur Number k N capital letter me hota hai

//aur number ko string mei convert ke liye String() function ka use karte hai aur String k S capital letter me hota hai

console.log(typeof valueInNumber)   //ab valueInNumber ka datatype number hai

console.log(valueInNumber)

// "33"=>33
// "33abc"=>NaN(not a number) aur iska datatype number hi hoga
// true= 1; false=0; null=0; undefined=NaN; ye sabko number me convert karne par aise hi result aayega

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn) //number ko boolean me convert karne ke liye Boolean() function ka use karte hai aur Boolean k B capital letter me hota hai

console.log(typeof booleanIsLoggedIn) //1 ko boolean me convert karne par true aayega

console.log(booleanIsLoggedIn)

//1=>true; 0=>false
//""=>false
//"arjun"=>true; ye sabko boolean me convert karne par aise hi result aayega

let someNumber=33
let stringSomeNumber=String(someNumber)

console.log(typeof stringSomeNumber) //number ko string me convert karne par string ka datatype aayega
console.log(stringSomeNumber) //33 ko string me convert karne par "33" aayega
