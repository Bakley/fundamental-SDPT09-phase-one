// // variables => storage containers for values that are retrived later

// // How to declare variables

// // There are three ways to declare a variable

// // use of let
//     // => We can declare a variable
//     let user;
//     console.log(user)

//     // // => we assign a value
//     user = {
//         "name" : "John Doe"
//     }
//     console.log(user)

//     // We can reasign the user to a different value

//     user = "Jane Doe"
//     console.log(user)

//     user = 45
//     console.log(user)


// // use of const
//     // we declare a variable and innit a value 
//     // The data cannot be reassigned

//     const bio_details = {
//         user_name : "dta",
//         user_age : 56,
//         user_permissions: true
//     }

//     console.log(bio_details)
    

// // Assignment operator

// let number = 34
// const num = '34'

// // Equality and inequality operator
// // => So we can identify truthy and flasy values
//     // strict
//     // ===
//         // Type conversion
//         // => return true if two values are equal. The data type and actual value should be equal
//     // loose
//     // ==
//         // => return true if two values are equal. The data type is optional and actual value should be equal


// // Relational Operators

// // Logical operators
//     // AND => &&, return true if all the condition are true
//     // OR => ||, return true if one of the condition is true
//     // NOT => !

// // function delaration => hoisting
// function add(lesson, parctise) {
//     return lesson + parctise
// }

// const addittion = (lesson, parctise) => {
//     return lesson + parctise
// }


// Recarp of Functions


// What is a function?
    // => it's a object {}
    // => contains a sequence of JavaScript statements
    // => Functions can, but are not obligated to, return `return values`

// Types of functions
    // => Arrow functions = done
    // => function expressions = done
    // => function declaration = done
    // => Anon functions = done
    // => IIFE: Immediately-Invoked Function Expression
    // => first class function = 1/3
        // => callbacks = done
        // => closure
        // => HOF: Higher Order functions
    // => recursive functions

// // invoke a function declaration
// console.log(user("Doe", 56, 1.6))

// // Create a function declaration
// function function_name(parameters) {
//     // body will contain the sequence of statements
// }

// function user(name, weight, height){
//     let bmi;
//     bmi = weight / (height* height)
//     let jina = name
//     return `${jina} has a bmi of ${bmi}`
// }


// create a function expression
    // an expression is a combination of data and operators
    // create a variable that holds a functions a value
// const function_name = function (parameters) {
//     // where the statements execute
// }

// invoke a function expression
// function_name(arguments)


// // create an arrow function expression
// const arrow_function = (parameters) => {
//     // execute the statements
// }

// invoke an arrow function
// arrow_function(arguments)


// const number = nums => nums ** 2

// const addittion = (positive_y, positive_x) => positive_x + positive_y

// const multiply = (x, y) => {
//     return x * y
// }

// console.log(number(9), addittion(9, 8), multiply(9, 9))



// First class functions
    // =>first-class objects || first-class citizens
    // =>They can be treated like any other values

    // How are value treated in js
        // => Assign values to variable
        // => Pass values as arguments to functions
        // => Return values from functions

// Callback
    // Leverage the concepts of the first class function
    // => A callback is a function passed as an argument to another function
    // => The function will be executed at a later time

    // Reason we use a callback
        // => Handles async operation (API call, setTimeout)

// function executeCallback(callback){
//     callback()
// }

// let indepentfunc = () => console.log("Callback executed!")

// console.log(executeCallback(indepentfunc))

function wassabi(kamande){
    setTimeout(() => {
        const data = {
            'id' : "123-554",
            "first_name": "John",
            "last_name": "Doe"
        }
        kamande(data)
    }, 5000)
}


wassabi(function(infor){
    console.table(infor)
})

const basicArrowfunc = (data) => {
    console.log(data)
}

function getDatafromApi(callback){
    const data = {
        "id": 1,
        "name": "john doe"
    }
    callback(data)
}

getDatafromApi(basicArrowfunc)
