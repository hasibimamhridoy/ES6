/**
 * Find ekta peramiter ney. Seta holo --- 
 * -------**** Callback Function
 * This callback function recieved three peramiter
 * 1. Each of the every array element
 * 2. Index of origianl array element
 * 3. Original Array
 * -----------------------
 * Find New ekta array retuen kore with out change original Array.
 */

const numbers = [3, 109, 7, 4, 23, 65, 456, 7, 78, 34, 545, 563]

const evenNumber = numbers.find(function (number) {
    return this
}, this)

console.log(evenNumber);

class Student {

    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    test() {
        console.log("Hello This is a test");
    }

    exampleFunction(){
        numbers.find(function () {
            console.log(this);
        },this)
    }
}

let hasibImam = new Student("Md: Hasib Imam",24)
console.log(hasibImam);

hasibImam.exampleFunction()