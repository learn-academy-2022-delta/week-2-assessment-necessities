// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { describe } = require("yargs")


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.



// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

        //pseudocode - im going to first create a jest test with two expect statements that will look at a function called muliplyByThree. the function will take in a array, then use the .map method to create a new array with all values multiplied by 3

        // im going to copy the syntax for the test from my notesto put here

        // describe(" ", () => {
        //     it(" ", () => {
        //         expect().toEqual()
        //         expect().toEqual()
        //     })
        // })




const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

        // describe("multiplyByThree", () => {
        //     it("takes in an array and returns a new array with values multiplied by 3", () => { 

        //     expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        //     expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
        //     })
        // }) 

        // finised writing the test, now going to run it
        // - had to rewrite it because it kept saying that it doesnt contain any tests


        // --- after 20 mins i realized it added those two lines to the beginning of the page



describe("multiplyByThree", () => {
    it("takes in an array and returns a new array with values multiplied by 3", () => { 

    expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
}) 


const multiplyByThree = (array) => {
    return array.map(value => value * 3)
}


        // It passed, i only know that inferred return in (value => value * 3) because i saw it in the demonstration! but its pretty cool



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.



const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

    // pseudocode
    // declare a function called isNumberDivisible
    // takes one number input called number1
    // use an if else to determine if it is evenly divisible by 3( number1 % 3 === 0)
    // create a test that looks at a function called isNumberDivisible
    // create three expect statements, for for 15, 0, and -7 with a string attached that says whether they are divisble by 3 

    describe("isNumberDivisible", () => {
        it("takes in a number and returns whether it is divisible by three", () => {
            expect(isNumberDivisible(num1)).toEqual(`${num1} is divisible by three`)
            expect(isNumberDivisible(num2)).toEqual(`${num2} is divisible by three`)
            expect(isNumberDivisible(num3)).toEqual(`${num3} is not divisible by three`)
        })
    })

    // going to run the yarn test now that i have written the test

    // ... yes the line was there again
    // ok now got not defined - going to write the function according to the pseudo above

    const isNumberDivisible = (num1, num2, num3) =>{
        if(num1 % 3 === 0) {
            return `${num1} is divisible by three`
        } else {
            return `${num1} is not divisible by three`
        }
        if(num2 % 3 === 0) {
            return `${num2} is divisible by three`
        } else {
            return `${num2} is not divisible by three`
        }
        if(num3 % 3 === 0) {
            return `${num3} is divisible by three`
        } else {
            return `${num3} is not divisible by three`
        }
    }

    // i reread the prompt and decided that putting three if statements was closer to what the question meant when it asked for all three expect statements to be fulfilled by one function, i did not anticipate having to put three if statements in when i wrote my psuedo code
    // but the tests are passing 

            //     multiplyByThree
            //     ✓ takes in an array and returns a new array with values multiplied by 3 (1 ms)
            //   isNumberDivisible
            //     ✓ takes in a number and returns whether it is divisible by three (1 ms)

            // Test Suites: 1 passed, 1 total
            // Tests:       2 passed, 2 total






// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.




const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.




        // i am going to create a test for a function called arrayCapitalize, the test will have two expect statements, one for each array input, the output array will be made of strings with all letters capitalized

describe("arrayCapitalize", () => {
    it("takes in an array and returns each string element capitalized in a new array", () => {
        expect(arrayCapitalize(randomNouns1)).toEqual(expect.arrayContaining(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]))
        expect(arrayCapitalize(randomNouns2)).toEqual(expect.arrayContaining(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]))
    })
})

        // i decided to use a new parameter in the .toEqual array to make sure the return is exact
        // running first test - got arrayCapitalize not defined going to pseudocode the function now

        // im going to declare a function called arrayCapitalize
        // it is going to take in two arrays and return two new arrays with all string elements capitalized
        // i am going to use .join .toUpperCase and .split methods to split the array into individual strings, make each letter uppercase, and then rejoin them into an array and return the new array

                // const arrayCapitalize = (randomNouns1, randomNouns2) => {
                //     let newArray1 = randomNouns1.join(" ")
                //     newArray1.toUpperCase().split(" ")

                //     let newArray2 = randomNouns2.join(" ")
                //     newArray2.toUpperCase().split(" ")
                //     return newArray1, newArray2
                // }


        // so that code was not working for me and i tried to rewrite it once or twice before starting to look at notes, i also had an issue where i was passing the arrays directly into where i declared the function and not where i was console logging it and i kept getting undefined for a while, but here is it rewritten



       
  
  const arrayCapitalize = (array1, array2) => {
    let newArray1 = array1.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })

    let newArray2 = array2.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })



    return newArray1.join(" "), newArray2.join(" ")

    }
console.log(arrayCapitalize(randomNouns1, randomNouns2))






// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
