 const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//current context or status or values of the object ko print karenge
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//global context yaani ki node environment ki baat ho rhi joki point kar rh empty object ko
//browser mei agar global context karenge print toh window show hoga (joki uska global object hai) instead of empty object joki node ka global object hai


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//function ke andar print karenge this ko toh kaafi saari basic values aati hain uss function ki 
//     Lekin agr hum object jaise uss function ke variables ko access krna chahenge toh nhi hoga wo......this will not work
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {//another way of defining functions--arrow function
    let username = "hitesh"
    console.log(this);//this.username isme bhi kaam nhi karega aur sirf this isme dega ek empty object
}


// chai()


//arrow function ka basic syntax.......()=>{}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //arrow function has implicit return....parenthesis not needed and use () and it can be used for a single expression extending across multiple lines
// const addTwo = (num1, num2) => ( num1 + num2 )//yaad rkho ki jab {} ye use kare toh return likhna padega aur jb () ye use kare toh no return needed

const addTwo = (num1, num2) => ({username: "hitesh"})//to return an object we must wrap it in ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 