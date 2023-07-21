/**
 * Filter ekta peramiter ney. Seta holo --- 
 * -------**** Callback Function
 * This callback function recieved three peramiter
 * 1. Each of the every array element
 * 2. Index of origianl array element
 * 3. Original Array
 * -----------------------
 * Filter New ekta array retuen kore with out change original Array.
 */

const numbers = [3, 109, 7, 4, 23, 65, 456, 7, 78, 34, 545, 563]

const evenNumber = numbers.filter( (number) => {
    return number > 10
}, this)

console.log(evenNumber);