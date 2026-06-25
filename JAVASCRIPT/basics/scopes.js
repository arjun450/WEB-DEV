//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c=30
    // console.log("INNER: ", a);
    
}

//if ke andar jo bhi likhenge usse kehte hain block scope aur jo bahar likhenge wo hai global scope
//global scope waali value scope ke andar available hoti hain

// console.log(a);
// console.log(b);
// console.log(c);

//windows ke andar k global scope aur windows ka global scope in cosole are different

//nested scope 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

//mainly closure bhi issi ko kehte ki andar k function bahar waale ke variables ko access kr paa rh
//baaki aur detail baad mei aayegi

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//ye waala function call error dega due to execution context
const addTwo = function(num){//isse expression bhi bolte hain kyuki variable bhot strong hain JS mei wo kuch bhi hold kr skte hain even functions bhi
    return num + 2
}//dusra tareeka h function declare krne ka
