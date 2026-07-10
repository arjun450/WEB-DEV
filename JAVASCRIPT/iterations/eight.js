const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//reduce method (shopping cart wgerah mei kaam aata hai) user supplied 'reducer' callback fn hi hai 
//ek initial value lete hain 

//fir basic syntax -->

//const sumWithInitial = array.reduce( 
// (accumulator, currentValue) => accumulator+currentValue,
//  initialValue
//);

//const sumWithInitial = array.reduce( function (accumulator, currentValue) {
//  return accumulator+currentValue
//  }, initialValue)

//currentValue -> jo array ki value chl rhi hai abhi
//accumulator -> empty variable
//accumulator bs ek baar initial value se initialize hota hai uske baad usme current value add ho hoke accumulator mei store hoti rehti hain
//add krta jayega saare elements aur store krta jayega accumulator mei 


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//agr array andar kuch values hain jinhe humme add karna hai aur total nikaalna hai toh hum reduce use krte 

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);