const str = "I Love Bangladesh"


const ReverseFn = (data) => {

    // let reverseStr = '';

    // const strArr = data.split(" ")

    // strArr.map(word => {

    //     reverseStr += " " + word.split("").reverse().join("");

    // })

    // return reverseStr



    const strArr = data.split(" ")

    const result = strArr.map(word => {

        return word.split("").reverse().join("");

    })

    return result.join(" ")


}

console.log(ReverseFn(str));