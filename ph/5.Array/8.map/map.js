/**
 * Not change main array
 * Return New Array
 */

const numberOne = [2,43,5,3,345,23,23,423]

const result = numberOne.map((number,index,numberOne)=>number*2)

console.log(numberOne);
console.log(result);