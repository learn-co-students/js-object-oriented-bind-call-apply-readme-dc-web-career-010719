// function greet() {
//     console.log(`my name is ${this.name}, hi!`)
// }

// function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`)
// }

// greet()
//
// let person = {
//     name: 'Bob',
//     greet: greet
// }
//
// person.greet()
//
let sally = { name: 'Sally' }
//
// greet.call(sally)
//
// greet.apply(sally)
//
// greet.call(sally, 'Terry', 'George')
//
// greet.apply(sally, ['Terry', 'George'])

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`)
}

let newGreet = greet.bind(sally)

newGreet('Bob')

greet('Bob')
