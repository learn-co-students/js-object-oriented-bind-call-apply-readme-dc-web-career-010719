function greet () {
  console.log(`my name is ${this.name}, hi!`)
}
greet() // my name is , hi


let person = {
  name: 'Bob',
  greet: greet
}
person.greet() // my name is Bob, hi!


let sally = {name: 'Sally'}
greet.call(sally) // my name is Sally, hi!
greet.apply(sally) // my name is Sally, hi!


function greet (customerOne, customerTwo) {
  console.log(`Hi, ${customerOne} and ${customerTwo}, my name is ${this.name}!`)
}
greet.call(sally, 'Terry', 'George') // Hi Terry and George, my name is Sally!
greet.call(sally) // Hi undefined and undefined, my name is Sally!
greet.call(sally, ['Terry', 'George']) // Hi Terry and George, my name is Sally!


function greet (customer) {
  console.log(`Hi ${customer}, my name is ${this.name}!`)
}
let newGreet = greet.bind(sally)
newGreet('Bob') // Hi Bob, my name is Sally!
greet('Bob') // Hi Bob, my name is !
