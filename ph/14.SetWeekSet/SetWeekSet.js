/**
 * Unique data store korar jonne set use kora hoy
 * Arrayr moto but array nah
 * Set Are itarable
 */

function log(anything) {
    // console.log(anything);
}

const arr = []; //literak syntext
const myArr = new Array();//constructor syntext


//sets use korte caile constructor syntex use korte hobe.
const mySet = new Set();

// mySet.add(5)
// mySet.add(7)
// mySet.add("Bangladesh")
// mySet.delete("Bangladesh")
//mySet.clear()

mySet.add(5).add(6).add(7).add("Bd")

// log(mySet.size)
// log(mySet)

/**
 * Array to set
 */
const newArr = [122,23234,345]
const newSet = new Set(newArr)
for (const iterator of newSet) {
    // console.log(iterator);
}

// log(newSet)


/**
 * Set to Array
 */
log([...newSet]) //first Way
log(Array.from(newSet)) //Second Way


/**
 * Set Use Cases
 * ------------------
 * 
 * Unique element niye asar jonne set bebohar hoye thake
 * amra jodi newSet.add(122) tahole eta oi set er moddhye add hobe na karon 112 already oi set er vitorei ase. set sob somoy unique sob element sekhane rakhe.
 */

newSet.add(122) //look 122 kintu add hocche na set er vitore.
// console.log(newSet);



///lets try create a unique array from an array helping of set

const stuNumber = [2,1,43,12,2,2,4,23,4,6,8,99,8,76,54,33,2,2,46,7]

const uniSet = new Set(stuNumber)

// console.log(uniSet);
// console.log([...uniSet]);


/**
 * Set Union from two variable
 */

const setA = new Set([1,2,3])
const setB = new Set([4,3,2])
const union = new Set([...setA,...setB])
// console.log(union);

const intersection = new Set([...setA].filter(num=>setB.has(num)))

// console.log(intersection);

const difference = new Set([...setA].filter(num=>!setB.has(num)))

// console.log(difference);



/**
 * Weak Set
 * WE can added only object and array
 */

const myWeakSet = new WeakSet()
myWeakSet.add({a:2,b:4})
// myWeakSet.add(true)//error
// myWeakSet.add("true")//error
// myWeakSet.add(43)//error
myWeakSet.add([32,34])
console.log(myWeakSet);


/**
 * Use cases weakSet
 */

class SomeClass {
    constructor(){

        console.log(this);
        myWeakSet.add(this)

    }

    method(){

        if (!myWeakSet.has(this)) {
            throw new Error('You cannot acces it directly')
        }

        else{
            return("Im a method");
        }

    }
}

const a = new SomeClass();

console.log(a.method());
// console.log(SomeClass.prototype.method());






