export const number = [23, 45, 34,[50654,343532], 6, 8, 56, 4]
const [,,,[a, b]] = number

console.log(a, b);

export const person = {
    name: "Hasib",
    age: 24,
    hight: "5.7",
    education: {
        degree: 'BSS',
        university: {
            name: "Comilla"
        }
    }
}

const { name: title, age, hight, education: { degree, university: { name: uniName } = {} } = {} } = person || {}

console.log(title, age, hight, degree, uniName);


//example

// //old way

let c  = 1;
let d =2; 
// let tem = c;
// c=d;
// d=tem
// console.log(c,d);


//new way
 const [swp1,swp2] = [c,d]
console.log(swp2,swp1);

export default c



