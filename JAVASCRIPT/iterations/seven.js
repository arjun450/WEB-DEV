const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// map ka use hota hai jb array ki values ko modify krna ho ya change krna ho
// filter ka use hota hai jb humme values ko kisi condition ke against check krna ho
// values return dono mei hi hoti ek mei updated values aur dusre mei checked valeus
// baaki cheezon mei same hain jaise callback fn aur syntax

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

//isse kehte hain chaining jisme multiple methods use kr skte
// pehle method ke result pe dusra method kaam aaega and so on

console.log(newNums);
