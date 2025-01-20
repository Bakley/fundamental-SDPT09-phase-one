// Arrays
    // => Arrays are a type of collection, that is ordered 
    // => starting at 0
    // => contigous sequence of data
    // => [] a pair of square brackets

const x = [] //Empty array

const weatherData = [ {}, true, 67, {}, [], true, NaN, [] , []  ]
           //index//  0,   1,   2,  3 , 4,   5,    6,  7,   8    

// Accessing an Element
// To access an element, we use bracket notation like this: nameOfArray[index].


// Accessing a Method
// To access an method use the dot notation like this: nameOfArray.nameOfMethod()

// Create Read Update Delete

// => Create an array 
const arr = [] //Empty array
const arrData = new Array()

// Insert data inside the array
// => arr.push()
    // => Add elements to the end of the array
    // => returns the length of the array

// => arr.ushift()
    // => Add elements to the beginning of the array
    // => returns the length of the array

// Insert data to the middle of an array
// => arr.splice(index, deleteCount, elementToAdd)
    // => Calculate the middle index = Math.floor(arr.length / 2)
    // => Use 0 if we want to insert data
    // => Pass the data to be added
    // => returns the array of deleted elements if present 
