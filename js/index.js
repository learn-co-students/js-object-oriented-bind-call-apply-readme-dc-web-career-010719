//Using .call( ) and .apply( ) to specify .this assignment
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
// my name is Sally, hi!
 
greet.apply(sally);
// my name is Sally, hi!


//.call( ) with arguments can be passed in directly
let sally = { name: 'Sally' };
 
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
 
greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

//.apply( ) with arguments must be passed in as an array
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!


//Using .bind( ) to specify .this assignment
let sally = { name: 'Sally' };
 
function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
 
greet('Bob');
// Hi Bob, my name is !

//webapp that matches a user's interests to event keywords. Since the method requires a callbacl function, we must use .bind( ) within the function expression to keep the .this( ) within scope of the User instance
class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}
 
class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
 
    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);

//this can also be achieved with arrow functions, as those do not have their own .this assignment and rely on the context in which they are invoked in
matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}