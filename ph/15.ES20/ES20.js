/**
 * ECMA - European Computer Manufacturers Association
 */


/**
 * ES11 Js 2020 e echeche.
 */

//---- 1. amra jani brower er khettre window and nodejs er khettre glabal obejct hoye thake . amra cailei global object gulo ekoi sathe browser and node e console kore dekhte pari na.like : globalThis: etar help e amra duijaygay e korte pari.s

globalThis.setTimeout(()=>{
// console.log("Hello This is timeout");
},3)

//----2 BigInt

let leargest_int = Number.MAX_SAFE_INTEGER
leargest_int+=1
leargest_int+=1
console.log(leargest_int);
//here note ar bartese na
//tae js e BigInt name new variable e eseche es11 e.s

let leargest_BigInt = Number.MAX_SAFE_INTEGER
leargest_BigInt += 1
leargest_BigInt = BigInt(leargest_BigInt) + 1n
console.log(leargest_BigInt);

//----3. optinal chaining

//4 . Nullish  Coalescing Operator - ??
//Null o undefined ke ekotrito korse
let language;
console.log(language?? 'Javascript');
//differernce betwwen nulllish ?? , or || operator
//or || operator left side a falsy value thaklei right side er value print kore dey but on the other hand nullish ?? operator sudhu matro null and undefined holei sei kaj ta kore.


//5. Dynamic Import -

//6. promise.allsettled

//7.string.matchALl