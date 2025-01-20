// Iteration is a more specific form of looping, often linked to a collection of items(Iterable)

// JavaScript provide two good ways
// => for ... of(to loop through the values of an iterable)
// => for ... in(to loop through keys of an objects)

const toDoPlan = ["Library", "Famous Market", "Awesome Airport", "Garage"]

for(const plan of toDoPlan){
    console.log(`I visisted this places: ${plan}`)
}


const atom = {
    elem : "Hydrogen",
    atomicNumber: 1,
    state : "gas"
}


for (const prop in atom){
    console.log(`${prop}: ${atom[prop]}`)
}