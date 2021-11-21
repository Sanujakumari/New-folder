console.log(process.argv)
const[, , num1, num2]=process.argv;
console.log(num1,num2)
const sum=(a,b)=>a+b;
console.log(sum(parseInt(num1),parseInt(num2)))