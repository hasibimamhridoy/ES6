// let Person = {
//     name: "Md. Hasib Imam",
//     age: 24,
//     tech: ["HTML", "CSS", "JS", "React", "Node", "Express", "Mongo"],
//     printPerson: function () {
//         console.log(this.name);

//         // this.tech.forEach(function (tec) {
//         //     console.log("this from for each",this);
//         //     console.log(`Im ${this.name} and ${this.age} years old. ${tec} are my skilled`);
//         // })

//         this.tech.forEach(tec => {
//             console.log("this from for each", this);
//             console.log(`Im ${this.name} and ${this.age} years old. ${tec} are my skilled`);
//         })

//     }
// }

// Person.printPerson()


const search = document.getElementById('search')
const display = document.getElementById('result')
const thanks = document.getElementById('thanks')


// function show() {
//     display.innerHTML = this.value
//     console.log(this);
//     setTimeout( function () {
//         console.log(this);
//         thanks.innerHTML = `You typed ${this.value}`
//     }, 1000)
// }


const  show = ()=> {
    display.innerHTML = this.value
    console.log(this);
    // setTimeout( function () {
    //     console.log(this);
    //     thanks.innerHTML = `You typed ${this.value}`
    // }, 1000)
}

search.addEventListener("keyup", show)