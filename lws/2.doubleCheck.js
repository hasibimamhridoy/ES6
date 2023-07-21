const Name = ["Hasib","Imam","Hridoy","Nirob","Shuvo","Sun","Hridoy","Nirob","Sun",]

const DoubleCheck = (arr)=>{
    
    let output = {};

    arr.map(name =>{
        output[name] = ( output[name] || 0 ) + 1
    })

    return output

}

console.log(DoubleCheck(Name));