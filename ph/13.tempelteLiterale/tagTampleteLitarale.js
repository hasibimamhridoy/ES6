const player1 = "Shakib"
const player2 = "Tamim"

const modifier = (str, ...params) => {
    // console.log(str);
    // console.log(params);

    const modifyName = str.reduce((preValue, curValue) => {

        return preValue + curValue + (params.length ? "Mr. " + params.shift() : "")

    }, "")

    return modifyName;
}

console.log(modifier`We have ${player1} and ${player2} in our criket team.`);