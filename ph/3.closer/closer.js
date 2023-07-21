

const closerParent = (capitel)=>{

    return (interest)=>{
        return(`closerParent give me the capitel and my bussines profit is : ${(capitel/interest)*100}  and capitel dise amk ${capitel}` );
    }

}

const bussinesOne = closerParent(100000)
const profit = bussinesOne(25)
console.log(bussinesOne);
console.log(profit);