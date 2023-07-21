/**
 * Amra jani array ke onno kono variable er moddhe assign kora hole tara ekta upor arekta refference dhore rakhe tai jodi ekta change hoy onnotao change hoye jay.
 * 
 * Ejoone amora spread operator diye puro ekta array cerbon copy banay felte pari and tara freedom ekta ekta individual.
 */

const array = [23,5,32,34,3432,434,234]

const newArray = [...array,1,2,3]

console.log(array);
console.log(newArray);