// Immediately Invoked Function Expressions (IIFE)
//jaise hi humne function likha turant hi humme usse execute karwana hai aur global scope ke variable pollution se bhi bachana h function ko tab humm iife use karte hain

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//semi colon is important to stop the iife from executing endlessly otherwise next function or iife wont execute

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

