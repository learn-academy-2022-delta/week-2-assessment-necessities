// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
 console.log(cohort.split(""))

// a) Your answer: .split("") will split the string into an array of single characters
// b) Verify and explain: it did indeed split into an array of single characters: 
//[
//   'D', 'e', 'l', 't',
//   'a', ' ', '2', '0',
//   '2', '2'
// ]

  // the reason for this is the .split("") method when run on a string will divide it at a character you specify into new elements in an array, since "" contains no specific character but it does tell the new array that the elements are strings
console.log("2-----")


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: it will log: Hello, LEARN Student!
// b) Verify and explain: it returned undefined since the function does not return anything

console.log("3----- ")
// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: - it did return a new array with each value double; it used the .map method to create a new array with each value multiplied by 2

console.log("4----- ")
// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: this calls the filter method on the array and then returns only values that are odd by checking the remainder of the division by 2


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: this creates a object called myCodingSkills and logs the key languages first element at position 0


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: it will print a object with the values "George", "Bravo", 2022
// b) Verify and explain: line 77 creates a new object called learnStudent with the constructer class Learn; it is created with the unique name value george an two values from the class Bravo and 2022
