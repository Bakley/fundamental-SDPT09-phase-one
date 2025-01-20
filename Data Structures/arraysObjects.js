// Arrays and Objects - What is Really Going On?
const phrases = {
    greeting: "Hello there!",
    time: () => {
      const currentTime = new Date();
      return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    }
}

console.log(typeof(phrases))
console.log(phrases.time())

// Creating an Object Using the Constructor Function
function PhraseObjectConstructor(name){
    this.greeting = `Hello there, ${name}!`
    this.time = () => {
        const currentTime = new Date();
        return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
      };
}

const phrase = new PhraseObjectConstructor("Albert")
const phrase2 = new PhraseObjectConstructor("Jobs")

console.log(phrase.greeting, phrase.time())
console.log(phrase2.greeting, phrase2.time())

