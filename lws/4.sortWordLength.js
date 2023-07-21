const str = "Java is a programming language"

const sortWord = (data)=>{

    const dataArr = data.split(" ")
    
    dataArr.sort((a,b)=>{
        return a.length - b.length
    })

    return dataArr.join(" ")


}

console.log(sortWord(str));