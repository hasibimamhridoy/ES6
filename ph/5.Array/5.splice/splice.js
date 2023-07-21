/**
 * Changes main array
 * Recieved three peramiter
 * fist One - which one to start splice
 * second one - how many element remove
 * third one - which element can added in the original array
 * return a remove element array.
 */

const numbers = [3, 109, 7, 4, 23, 65, 456, 7, 78, 34, 545, 563]

const sliceNumber = numbers.splice(0,3,5000,6000)

console.log(numbers);
console.log(sliceNumber);