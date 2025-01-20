// Data set with key(property name that maps to a corresponding data type/object) value pair
// Containers for properties and methods
//  collections of data. 
// bounded by curly braces ({ }).
// unordered data structure

// => Create an empty object

const obj = {}

const particle = {
    "mass" : 98,
    charge : -2,
    "name": 'wassabi',
    calAvagargadoK: () => {}
}

// => Keys (mass,   charge, name)
// => Value(number, number, string )


// To access the values inside the object we use the dot notation (objName.key)
// To access the values inside the object we use the square bracket notation (objName["key"])

// => JavaScript Object methods

// Object.keys()
// => returns an array of all the keys of an objects

// Object.values()
// => returns an array of all the values of an objects

// Object.entries()
// Return an array of key-value pair

// Object.fromEntries()
// Converts an array of key-value pairs back into an object.


// => Modifing an Object

const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };
// => Updating the Object in a destructive manner
// mondayMenu.fries = "Sweet Potato"

// console.log(mondayMenu)

function updateMenuDestructive(obj, key, value) {
    obj[key] = value

    return obj
}

// const tuesdayMenu = updateMenuDestructive(mondayMenu, "option1", "Machakura")

// console.log(tuesdayMenu)

// => Updating the Object in a Nondestructive manner
// we need the help a spread operator (...)
// Helps to make a copy of the original

function updateMenu(obj, key, value){
    const newObject = { ...obj }

    newObject[key] = value

    return newObject
}

const tuesdayMenu = updateMenu(mondayMenu, "option1", "Machakura")

console.log("This is the new data: ",tuesdayMenu)
console.log("This is the Old data: ",mondayMenu)

