
// let persons = []

let persons = new Array();
persons.push("Shakib")
// console.dir(Array.prototype);


/**
 *
 */

const compareFn = (a,b)=>{
    return b-a
}


let arr = [1,4,64,74,23,34,56,3223,534]

const sortArr = arr.sort(compareFn)
console.log(sortArr);


