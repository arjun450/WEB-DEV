const name="Arjun"

const repocount= 15

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

//backticks se string interpolation hota hai jisme hum variables ko directly string ke andar use kar sakte hai without concatenation

const str = new String("hello-Arjun-Vishnoi")//iss method mei aur const name="Arjun" mei farq ye hai ki new String() ek object return karta hai jabki const name="Arjun" ek primitive string return karta hai

//the primitive strings can still use the string methods because JavaScript automatically wraps the primitive string temporarily in a String object when we try to access its properties or methods called autoboxing

//these methods come from string prototype  

//indexing also works on both primitive strings and String objects

console.log(str) //String {"hello"}

console.log(typeof str) //object

console.log(name.__proto__)

const newstr = name.substring(0,4)

console.log(newstr);

const newstr2=name.slice(-5,4)//ye slice method hai jo negative indexing ko support karta hai
//negative indexing ka matlab hai ki hum string ke end se count karte hai, -1 last character ko represent karta hai, -2 second last character ko represent karta hai and so on

console.log(newstr2)

const url="https://arjun.com/arjun%20vishnoi"

console.log(url.replace("%20","-"))//ye replace method hai jo string ke andar ek substring ko dusre substring se replace karta hai

console.log(url.includes("arjun"))//ye includes method hai jo check karta hai ki string ke andar ek substring exist karti hai ya nahi, agar exist karti hai to true return karta hai otherwise false

console.log(str.split('-'))//ye split method hai jo string ko ek array mei convert karta hai based on the separator jo humne pass kiya hai