/**
 * Not change Main array
 * Return New Array
 */


const numberOne = [2,43,5,3,345,23,23,423]

const sum = numberOne.reduce((preValue,currentValue,currentIndex,arr)=>{
return preValue+currentValue
},0)

console.log(numberOne);
console.log (sum);