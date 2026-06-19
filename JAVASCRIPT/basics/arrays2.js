 const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//concat aur push dono kaam karte hai array ko merge karne ke liye but push me array ke andar array aa jata hai aur concat me array ke andar array nahi aata hai

const all_new_heros = [...marvel_heros, ...dc_heros]

//spread operator is used to merge two arrays into one array without nesting them. It spreads the elements of the arrays into a new array.

//kaanch ka gilas todne ki analogyas spread breaks the array into indivaual elements and then merges them into a new array.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

//flat method is used to flatten the array. It removes the nested arrays and returns a new array with all the elements in a single level. Infinity is used to flatten the array to any depth.

console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//isArray method is used to check if the given value is an array or not. It returns true if the value is an array, otherwise it returns false.
console.log(Array.from("Hitesh"))//from method is used to create a new array from an array-like or iterable object. It takes the object as an argument and returns a new array. In this case, it takes the string "Hitesh" and creates an array of characters from it.
console.log(Array.from({name: "hitesh"})) //in this case, it takes an object with a name property and creates an array from it. Since the object is not iterable, it returns an empty array. interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//of method is used to create a new array from a variable number of arguments. It takes the arguments and returns a new array containing those arguments. In this case, it takes the three score variables and creates an array with those values.
//difference between Array.of and Array.from is that Array.of creates an array from a list of arguments, while Array.from creates an array from an array-like or iterable object.