 // const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//object nesting
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//array waali problem aa jayegi iss tareeke mei
// const obj3 = Object.assign({}, obj1, obj2, obj4)//ek object me dono obejct ko copy
 
// {} isse saari values combine ho jayegi aur ek empty object mei copy ho jayengi
// actual syntax hai object.assign(target,source) means ki saare source objects ko target mei comnbine and copy kar rhe agr {} empty object nhi denge toh saari cheezein jo pehla object hoga e.g. obj1 mei aajeyngi
// target===returnedtarget 

const obj3 = {...obj1, ...obj2} // best spread operator simple syntax
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //key value pair deta h in the form of arrays in a array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //ye norml tareeka h access krne ka

const {courseInstructor: instructor} = course //isse kehte hai object destructuring isse hum dot notation ko baar baar use krne se bach skte hain aur object ke elements ko easily access kr skte hain 

// console.log(courseInstructor);
console.log(instructor); 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

