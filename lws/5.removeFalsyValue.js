const falsyArray = ["Hasib",false,"imam",null,"hridoy",undefined,"",0,NaN]

const RemoveFalsy = (data) =>{

    return data.filter(Boolean)

}

console.log(RemoveFalsy(falsyArray));