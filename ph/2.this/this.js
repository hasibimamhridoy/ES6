
// //-----------------role one : global this

// function Hello() {
//     console.log(this);
// }
// Hello()


//-----------------role two : object rule and call rule this
//amra call bind apply er maddhome this er value set kore dite pari
const hasibImam = {
    name : "Hasib Imam",
    dateOfBirth : 1999,
    ageCalculate : function (currentDate,msg) {
        console.log(`Hello ${this.name} . Your Age is : ${currentDate - this.dateOfBirth} . ${msg}`);
    }
}
const abirKolin = {
    name : "Abir Kolin",
    dateOfBirth : 1999,
}

// //call----
hasibImam.ageCalculate.call(abirKolin,2023,"Thank You Man")


/**
 * bind----
 * Tar mane bind sathe sathe call kore dey na.amra etake ekta variable e store kore rakhte pari then jokhon amader proyojon hobe tokhon amra etake call kore dile er output dekhte parbo.
 */
const bindVar =  hasibImam.ageCalculate.bind(abirKolin,2023,"Thank You Man")
console.log(bindVar());

/**
 * Apply----
 * apply call er motoi sudhu 2nd argument e array ney and array vitore sob peramiter amra  pass korte pari.
 */
hasibImam.ageCalculate.apply(abirKolin,[2023,"Thank You Man"])


