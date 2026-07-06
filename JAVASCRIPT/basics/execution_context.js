// JS Execution Context
// 1) JS code->Global Execution Context(this variable mei dete hai(browser mei this ki value hoti h window object))

// 2) Single-Thread based executions

// 3) ek aur execution context hota h->funstion execution context

// 4) Eval execution Context(Property of global execution context)

// 5) HOW THE EXECUTION PROCEEDS-->

// 6) CODE--> TWO PHASES

// 7) MEMORY "CREATION PHASE" --> JO BHI MATHEMATICAL FUNCTIONS YA VARIABLES YA EXPRESSIONS YA JO BHI LIKHA H USKE LIYE BS JAGAH ALLOCATE HOTI HAI EXECUTION ISS PHASE MEI NHI HOTA(MEMORY ALLOCATION ONLY)

// 8) EXECUTION PHASE --> EXECUTION PHASE MEI EXECUTION HOTA JO MATHEMATICAL FUNCTIONS AUR EXPRESSIONS LIKHE HAIN UNKA

// 9) EK CODE FILE LEKE SMJHAYA HAI VIDEO MEI

//CODE-->
/*
let val1 = 10
let val2 = 5
function addNum(num1, num2){
let Total = num1 + num2
return Total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
*/

//EXECUTION EXPLAINED-->
// 1)GLOBAL EXECUTION -> THIS

// 2)MEMORY CREATION PHASE -> val1->undefined     val2-> undefined      addNum->definition       result1->undefined        result2->unndefined

// 3)EXECUTION PHASE -> val1<-10   val2<-5   result1 <- addNum -> MAKES A SEPARATE EXECTION CONTEXT FOR ITSELF
// 3.1)new VARIABLE environment+execution thread for every execution of addnum MEANS NEW EUTION CONTEXT FOR EACH ADDNUM EXECUTION
// 3.2)MEMORY PHASE -> val1->UNDEFINED     val2->UNDEFINED     total->undefined
// 3.3)EXECUTION PHASE -> num1 -> 10     num2 -> 5      total-> 15
// 3.4)RETURN total TO GLOBAL EXECUTION CONTEXT
// 3.5)DELETE THE EXECUTION CONTEXT CREATED FOR THE FUNCTION

// 4)EXECUTION PHASE CONTINUED -> result1 -> 15      result2 -> addNum -> MAKES A SEPARATE EXECTION CONTEXT FOR ITSELF 
// 4.1)new VARIABLE environment+execution thread for every execution of addnum MEANS NEW EUTION CONTEXT FOR EACH ADDNUM EXECUTION
// 4.2)MEMORY PHASE -> val1->UNDEFINED     val2->UNDEFINED     total->undefined
// 4.3)EXECUTION PHASE -> num1 -> 10     num2 -> 5      total-> 15
// 4.4)RETURN total TO GLOBAL EXECUTION CONTEXT
// 4.5)DELETE THE EXECUTION CONTEXT CREATED FOR THE FUNCTION

// 5)EXECUTION CONTINUED -> result2 -> 12

// 6)EXECUTION COMPLETE


