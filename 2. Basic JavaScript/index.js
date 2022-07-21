//! JS is a LOOSELY TYPED, Object-Oriented and versatile scripting language
//? LOOSELY-TYPED : No explicit type assignment to  a variable only scope needs to be assigned. Data types can be switched dynamically.

// let a = 1;
// const func = () => {
//   let a = 20;
//   return a
// }
// console.log("Value Of A' >>", a, func());

const person = {
    name : "Tarun Tomar",
    age : 20,
    greet() {
        console.log("Hi, I am ", this.name)
    }
}

// person.greet()

const hobbies = ["Sports", "Cooking"]
// for (let index = 0; index < hobbies.length; index++) {
//     console.log(hobbies[index])
    
// }

// console.log(hobbies.map(x => {
//     return `Hobby : ${x}`
// }))

// console.log(hobbies)

hobbies.push("Programming")

// console.log("Hobbies", hobbies)

//TODO REST AND SPREAD OPERATOR

// const copyArray = [...hobbies]   //! Spread Operator

// console.log("Hobbies", copyArray)

// const toArray = (...args) =>     //! Rest operator
// {  
//     return args
// }

// console.log("TO ARRAY", toArray(1,2,3))

//! Array Destructuring

const printName = ({name}) => {
    console.log("Person's Name >>", name)
}

printName(person)

const {name, age} = person;

// console.log(name, age)

const [hobbies1, hobbies2, hobbies3] = hobbies

// console.log("My Hobbies are as Follows : ",hobbies1, hobbies2, hobbies3)

