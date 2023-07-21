
/**
 * When we need to check if any element has in the findIndex array then we can use the find index.
 * As same as find syntext.
 * And return arrayIndex
 * when the condition not find then they can retun -1
 * if -1 then we ensure that the condition not fill up
 */

const numbers = [3, 109, 7, 4, 23, 65, 456, 7, 78, 34, 545, 563]

const evenNumber = numbers.findIndex(function (number,index,numbers) {
    return number > 500
}, this)

console.log(evenNumber);