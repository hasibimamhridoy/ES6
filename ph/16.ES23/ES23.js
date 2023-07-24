let arrOldReverse = [1,4,64,74,23]
let result = arrOldReverse.reverse()
// dekkhun console e original array o reverse hoye gese, karon amra jani non primitive data gulo refference dhore rakhe.

let arrNewReverse = [1,4,64,74,23]
let resultNew = arrNewReverse.toReversed();
// dekkhun console e original array o reverse hoye gese, karon amra jani non primitive data gulo refference dhore rakhe.



/**
 * normal spliced original array ke muted kore fele mane changed kore fele ar return kore remove item.
 * 
 * Ar toSpliced() immutable vabe slice kora array ta ke return kore.
 */
let arr = [1,4,64,74,23]
const spliced = arr.toSpliced(2,1,400,500)


/**
 * Jodi amder kono nirdisto jaygay kono element ke replace kore deya lage without original array change then amra eta bebohar korte pari.
 */
let arr2 = [1,4,64,74,23]
const result2 = arr2.with(1,500)

