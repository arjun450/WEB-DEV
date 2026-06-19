// array

const myArr = [0, 1, 2, 3, 4, 5]//array me alg alg type ke elements bhi store kr skte ek hi array mei
//array riseable hote h, array ke elements ko change kr skte h
//array shallow copy hote h, array ke elements ko change krne se original array bhi change ho jata h
//deep copy ka mtlb h ki original array ke elements ko change krne se original array change nhi hota h, deep copy ka use krne ke liye spread operator ka use krte h

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//unshift method adds an element to the beginning of the array
// myArr.shift()//shift method removes the first element from the array

// console.log(myArr.includes(9));//includes method checks if an element is present in the array or not, returns true or false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//join method joins all the elements of the array into a string, returns a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. This method modifies the original array.
console.log("C ", myArr);
console.log(myn2);


//difference between slice and splice is that slice does not modify the original array while splice modifies the original array. Slice returns a new array while splice returns the deleted elements in an array.