
const array = [23,5,32,34,3432,434,234]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}

const object = {
    name :"Hasib",
    age: 24,
    hight : "5.7"
}

//for in
for (const key in object) {
    // console.log(key);
    // console.log(object[key]);
}

//for of
for (const arrEle of array) {
    console.log(arrEle);
}